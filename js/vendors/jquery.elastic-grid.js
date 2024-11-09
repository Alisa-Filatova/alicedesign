/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
import $ from 'jquery';
import classie from 'classie'

var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
    setup: function() {
        $( this ).on( "resize", $special.handler );
    },
    teardown: function() {
        $( this ).off( "resize", $special.handler );
    },
    handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function() {
                // set correct event type
                event.type = "debouncedresize";
                $event.dispatch.apply( context, args );
            };

        if ( resizeTimeout ) {
            clearTimeout( resizeTimeout );
        }

        execAsap ?
            dispatch() :
            resizeTimeout = setTimeout( dispatch, $special.threshold );
    },
    threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
    var $this = this,
        deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
        hasNotify = $.isFunction(deferred.notify),
        $images = $this.find('img').add( $this.filter('img') ),
        loaded = [],
        proper = [],
        broken = [];

    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function (key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
            $broken = $(broken);

        if ( deferred ) {
            if ( broken.length ) {
                deferred.reject( $images, $proper, $broken );
            } else {
                deferred.resolve( $images );
            }
        }

        if ( $.isFunction( callback ) ) {
            callback.call( $this, $images, $proper, $broken );
        }
    }

    function imgLoaded( img, isBroken ) {
        // don't proceed if BLANK image, or image is already loaded
        if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
            return;
        }

        // store element in loaded images array
        loaded.push( img );

        // keep track of broken and properly loaded images
        if ( isBroken ) {
            broken.push( img );
        } else {
            proper.push( img );
        }

        // cache image and its state for future calls
        $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

        // trigger deferred progress method if present
        if ( hasNotify ) {
            deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
        }

        // call doneLoading and clean listeners if all images are loaded
        if ( $images.length === loaded.length ){
            setTimeout( doneLoading );
            $images.unbind( '.imagesLoaded' );
        }
    }

    // if no images, trigger immediately
    if ( !$images.length ) {
        doneLoading();
    } else {
        $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
            // trigger imgLoaded
            imgLoaded( event.target, event.type === 'error' );
        }).each( function( i, el ) {
            var src = el.src;

            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data( el, 'imagesLoaded' );
            if ( cached && cached.src === src ) {
                imgLoaded( el, cached.isBroken );
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if ( el.complete && el.naturalWidth !== undefined ) {
                imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if ( el.readyState || el.complete ) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise( $this ) : $this;
};

/**
 * jquery elastic_grid
 *
 * Copyright 2013, vukhanhtruong
 * http://www.bonchen.net
 */
function parseVideoURL(url) {
    function endsWith(str, target) {
        return str.substring(str.length - target.length) === target;
    }

    function getParm(url, base) {
        var re = new RegExp("(\\?|&)" + base + "\\=([^&]*)(&|$)");
        var matches = url.match(re);
        if (matches) {
            return(matches[2]);
        } else {
            return("");
        }
    }

    var retVal = {};
    var matches;
    var shortYoutubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    if (url.indexOf("youtube.com/watch") != -1) {
        retVal.provider = "youtube";
        retVal.id = getParm(url, "v");
        retVal.embed = '//www.youtube.com/embed/'+retVal.id+'?fs=0';
    } else if (matches = url.match(shortYoutubeRegExp)) {
        retVal.provider = "youtube";
        retVal.id = matches[2];
        retVal.embed = '//www.youtube.com/embed/'+retVal.id+'?fs=0';
    } else if (matches = url.match(/vimeo.com\/(\d+)/)) {
        retVal.provider = "vimeo";
        retVal.id = matches[1];
        retVal.embed = '//player.vimeo.com/video/'+retVal.id+'?fullscreen=0';
    } else if (endsWith(url, '.mp4')) {
        retVal.provider = 'local';
        retVal.embed = url;
    }

    return retVal;
}

$.elastic_grid = {
    version: '1.0'
};
$.fn.elastic_grid = function(config){
    config = $.extend({}, {
        items: null,
        filterEffect: '',
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        expandingHeight: 500,
        expandingSpeed: 300,
        callback: function() {}
    }, config);

    // initial container object
    var container = $(this);
    // number of questions
    var numOfItems = config.items.length;
    if(numOfItems == 0){
        return false;
    }


    //initial items
    var gridContent = "";
    var ulObject = $('<ul id="gallery__grid" class="gallery__grid"></ul>');
    for (var itemIdx = 0; itemIdx < numOfItems; itemIdx++) {
        if(config.items[itemIdx] != undefined){
            var item = config.items[itemIdx];

            //initial new li
            var liObject = $('<li class="gallery__grid-item"></li>');

            //get tags
            var tags = item.tags;
            var strTag = "";
            for (var i = tags.length - 1; i >= 0; i--) {
                strTag += ","+tags[i];
            };
            strTag = strTag.substring(1);
            liObject.attr('data-tags', strTag);

            //initial a object
            var aObject = $('<a class="gallery__grid-link"></a>');
            aObject.attr('href', 'javascript:;;');

            //initial default photo
            var imgObject = $('<img class="gallery__item-preview" alt=""/>');
            var logoObject = $('<img class="gallery__item-logo" alt=""/>');
            var thumbURL = item.thumbnail[0];
            var largeURL = item.large[0];
            var logoURL = item.logo;

            var video = parseVideoURL(largeURL);
            if (video.provider === 'youtube'
                || video.provider === 'vimeo'
                || video.provider === 'local'
            ){
                largeURL = false;

                imgObject.attr('data-video', video.embed);
            }

            imgObject.attr('src', thumbURL);
            imgObject.attr('data-largesrc', largeURL);
            imgObject.attr('alt', item.title);

            logoObject.attr('src', logoURL);
            logoObject.attr('alt', item.title);


            //initial hover direction
            // var captionObject = $('<figcaption class="gallery__item-title"></figcaption>');
            // captionObject.html(item.title);
            var coverObject = $('<figure class="gallery__item-cover"></figure>');
            coverObject.append(logoObject);
    
            imgObject.appendTo(aObject);
            coverObject.appendTo(aObject);
            aObject.appendTo(liObject);
            liObject.appendTo(ulObject);
        }
    }
    ulObject.appendTo(container);
/**************************************************************************
* HOVER DIR
***************************************************************************/
    if(config.hoverDirection == true){
        ulObject.find('li').each( function() {
            $(this).hoverdir({
                hoverDelay : config.hoverDelay,
                inverse : config.hoverInverse
            });
        } );
    }

/**************************************************************************
* Tags to filter
***************************************************************************/
var porfolio_filter = container.find('#portfolio-filter');
var items = ulObject.find('li'),
itemsByTags = {};
var numOfTag = 0;

// Looping though all the li items:

items.each(function(i){
    var elem = $(this),
    tags = elem.data('tags').split(',');

    // Adding a data-id attribute. Required by the Quicksand plugin:
    elem.attr('data-id',i);

    elem.addClass(config.showAllText.toLowerCase().replace(' ','-'));
    $.each(tags,function(key,value){
        // Removing extra whitespace:
        value = $.trim(value);

        //add class tags to li
        elem.addClass(value.toLowerCase().replace(' ','-'));

        if(!(value in itemsByTags)){
            // Create an empty array to hold this item:
            itemsByTags[value] = [];
            numOfTag++;
        }

        // Each item is added to one array per tag:
        itemsByTags[value].push(elem);
    });

});

if(numOfTag > 1){
    // Creating the "Everything" option in the menu:
    createList(config.showAllText);

    // Looping though the arrays in itemsByTags:
    $.each(itemsByTags,function(k,v){
        createList(k);
    });
}else{
    porfolio_filter.remove();
}


porfolio_filter.find('a').bind('click',function(e){
    //close expanding preview
    $grid.find('.gallery__grid-item_opened').find('.gallery__grid-link').trigger('click');
    $grid.find('.close-button').trigger('click');

    var $this = $(this);
    porfolio_filter.find('.current').removeClass('current');
    $this.parent().addClass('current');

    var filterVal = $this.text().toLowerCase().replace(' ','-');
    var count  = numOfItems;
    ulObject.find('li').each( function(i, el) {
        classie.remove( el, 'hidden' );
        classie.remove( el, 'animate' );
        if(!--count){
            setTimeout( function() {
                doAnimateItems(ulObject.find('li'), filterVal);
            }, 1);
        }
    });

    localStorage.setItem("filter", true);
    localStorage.setItem("filter-all", false);

    if (filterVal === config.showAllText.toLowerCase().replace(' ','-')) {
        localStorage.setItem("filter-all", true);
    }

    $body.animate( { scrollTop : $this.offset().top }, settings.speed );

    return false;
});

function doAnimateItems(objectLi, filterVal){
    objectLi.each(function(i, el) {
        if(classie.has( el, filterVal ) ) {
            classie.toggle( el, 'animate' );
            classie.remove( el, 'hidden' );
        }else{
            classie.add( el, 'hidden' );
            classie.remove( el, 'animate' );
        }
    });
}

porfolio_filter.find('li:first').addClass('current');

function createList(text){
    var filter = text.toLowerCase().replace(' ','-');
    // This is a helper function that takes the
    // text of a menu button and array of li items
    if(text != ''){
        var li = $('<li>');
        var a = $('<a>',{
            html: text,
            'data-filter': '.'+filter,
            href:'#',
            'class':'filter',
        }).appendTo(li);

        li.appendTo(porfolio_filter);
    }
}
/**************************************************************************
* EXPANDING
***************************************************************************/
    // list of items
    var $grid = ulObject,
        // the items
        $items = $grid.children( 'li' ),
        // current expanded item's index
        current = -1,
        // position (top) of the expanded item
        // used to know if the preview will expand in a different row
        previewPos = -1,
        // extra amount of pixels to scroll the window
        scrollExtra = 0,
        // extra margin when expanded (between preview overlay and the next items)
        marginExpanded = 10,
        $window = $( window ), winsize,
        $body = $( 'html, body' ),
        // transitionend events
        transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        // support for csstransitions
        support = Modernizr.csstransitions,
        // default settings
        settings = {
            minHeight : config.expandingHeight,
            speed : config.expandingSpeed,
            easing : 'ease'
        };

    // add more items to the grid.
    // the new items need to appended to the grid.
    // after that call Grid.addItems(theItems);
    function addItems( $newitems ) {

        $items = $items.add( $newitems );

        $newitems.each( function() {
            var $item = $( this );
            $item.data( {
                offsetTop : $item.offset().top,
                height : $item.height()
            } );
        } );

        initItemsEvents( $newitems );

    }

    // saves the item´s offset top and height (if saveheight is true)
    function saveItemInfo( saveheight ) {
        $items.each( function() {
            var $item = $( this );
            $item.data( 'offsetTop', $item.offset().top );
            if( saveheight ) {
                $item.find('img').on('load', function() {
                    $item.data( 'height', $item.height());
                }).each(function() {
                    if(this.complete) $(this).trigger('load');
                });

                setTimeout(function(){
                    $item.data( 'height', $item.height());
                });
            }
        } );
    }

    function initEvents() {

        // when clicking an item, show the preview with the item´s info and large image.
        // close the item if already expanded.
        // also close if clicking on the item´s cross
        initItemsEvents( $items );

        // on window resize get the window´s size again
        // reset some values..
        $window.on( 'debouncedresize', function() {

            scrollExtra = 0;
            previewPos = -1;
            // save item´s offset
            saveItemInfo();
            getWinSize();
            var preview = $.data( container, 'preview' );
            if( typeof preview != 'undefined' ) {
                hidePreview();
            }

        } );

    }

    function initItemsEvents( $items ) {
        $items.on('keyup', function(event) {
            if (event.key === 'Escape') {
                hidePreview();
            }
        }).on('click', '.close-button, .gallery__popup-overlay', function(event) {
            if (event.target === this) {
                hidePreview();
            }
        }).children('a').on('click', function(e) {
            var $item = $( this ).parent();
            $item.removeClass('animate');

            localStorage.setItem('filter', false);

            getWinSize();
            // check if item already opened
            current === $item.index() ? hidePreview($(this)) : showPreview( $item );
            return false;

        });
    }

    function getWinSize() {
        winsize = { width : $window.width(), height : $window.height() };
    }

    function showPreview( $item ) {
        hidePreview();

        var preview = $.data( container, 'preview' ),
            // item´s offset top
            position = $item[0].offsetTop; // $item.data( 'offsetTop' );

        scrollExtra = 0;

        // if a preview exists and previewPos is different (different row) from item´s top then close it
        if( typeof preview != 'undefined' ) {

            // not in the same row
            if( previewPos !== position ) {
                // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                if( position > previewPos ) {
                    scrollExtra = preview.height;
                }
                hidePreview();
            }
            // same row
            else {
                preview.update( $item );
                return false;
            }

        }

        // update previewPos
        previewPos = position;
        // initialize new preview for the clicked item
        preview = $.data( container, 'preview', new Preview( $item ) );
        // expand preview overlay
        // preview.open();
    }

    function hidePreview() {
        //hide pointer
        $items.find('.gallery__pointer').remove();

        current = -1;
        var preview = $.data( container, 'preview' );

        if (typeof preview == "undefined") {
            //do nothing
        } else {
            preview.close();
        }

        $.removeData( container, 'preview' );
    }

    // the preview obj / overlay
    function Preview( $item ) {
        this.$item = $item;
        this.expandedIdx = this.$item.index();
        this.create();
        this.update();
    }

    Preview.prototype = {
        create : function() {
            // create Preview structure:
            this.$title = $( '<h3 class="gallery__item-title"></h3>' );
            this.$logo = $( '<img class="gallery__item-logo" src=""></img>' );
            this.$description = $( '<p class="gallery__item-description"></p>' );
            this.$href = $( '<a class="button gallery__button" href="#">Visit website</a>' );
            this.$detailButtonList = $( '<div class="gallery__buttons-list"></div>' );
            this.$details = $( '<div class="gallery__details"></div>' ).append( this.$title, this.$description, this.$detailButtonList );
            this.$loading = $( '<div class="loader loader_overlay"></div>' );
            this.$fullimage = $( '<div class="gallery__full-img-box"></div>' ).append( this.$loading );
            this.$detailsLeftPart = $( '<div class="gallery__details gallery__details_left"></div>' ).append( this.$fullimage );
            this.$closePreview = $( '<button role="button" class="close-button gallery__close-button" title="close window">Close</button>' );
            this.$previewInner = $( '<dialog class="gallery__popup"></dialog>' ).append( this.$detailsLeftPart, this.$details, this.$closePreview );
            this.$previewEl = $( '<div class="gallery__popup-overlay"></div>' ).append( this.$previewInner );
            // append preview element to the item
            this.$item.append( $('<div class="gallery__pointer"></div>') );
            this.$item.append( this.getEl() );

            // set the transitions for the preview and the item
            if( support ) {
                this.setTransition();
            }
        },
        update : function( $item ) {

            if( $item ) {
                this.$item = $item;
            }

            // if already expanded remove class "gallery__grid-item_opened" from current item and add it to new item
            if( current !== -1 ) {
                var $currentItem = $items.eq( current );
                $currentItem.removeClass( 'gallery__grid-item_opened' );
                this.$item.addClass( 'gallery__grid-item_opened' );
                // position the preview correctly
                this.positionPreview();
            }

            // update current value
            current = this.$item.index();


            // update preview´s content
            if(typeof config.items[current] === "undefined"){
                //nothing happen
            }else{
                window.eldata = config.items[current];

                this.$title.html( eldata.title );
                this.$description.html( eldata.description );
                this.$previewInner.attr('aria-label', eldata.title);
                //clear current button list
                this.$detailButtonList.html("");
                var urlList = eldata.button_list;

                if(urlList.length > 0)
                {
                    for (i = 0; i < urlList.length; i++)
                    {
                        var linkTarget = (urlList[i]['new_window']) ? '_blank' : '_self';
                        var ObjA = $('<a target="'+linkTarget+'"></a>');
                        ObjA.addClass('button gallery__button');
                        if(i==0){
                            ObjA.addClass('button_accent');
                        }
                        ObjA.attr("href", urlList[i]['url']);
                        ObjA.html( urlList[i]['title']);
                        this.$detailButtonList.append(ObjA);
                    }
                }

                var self = this;

                // remove the current image in the preview
                if( typeof self.$largeImg != 'undefined' ) {
                    self.$largeImg.remove();
                }


                //relate photo
                var glarge = eldata.large;
                var gthumbs = eldata.thumbnail;
                var imgTitle = eldata.img_title;
                if(glarge.length == gthumbs.length && glarge.length > 0){
                    var ObjUl = $('<ul class="slider gallery__slider"></ul>');
                    for (i = 0; i < gthumbs.length; i++)
                    {
                        var thumbURL = gthumbs[i];
                        var largeURL = glarge[i];

                        var Objli = $('<li class="slider__item"></li>');
                        var ObjA = $('<a class="slider__link" href="javascript:;;"></a>');
                        var ObjImg = $('<img alt=""/>');

                        ObjImg.addClass('slider__thumbnail');
                        if(i==0){
                            ObjImg.addClass('slider__thumbnail_selected');
                        }

                        var video = parseVideoURL(largeURL);
                        if (video.provider === 'youtube'
                            || video.provider === 'vimeo'
                            || video.provider === 'local'
                        ) {
                            largeURL = false;

                            ObjImg.attr('data-video', video.embed);
                        }

                        ObjImg.attr('src', thumbURL);
                        ObjImg.attr('data-large', largeURL);
                        ObjImg.attr('alt', imgTitle[i]);
                        ObjImg.attr('title', imgTitle[i]);
                        ObjA.append(ObjImg);
                        Objli.append(ObjA);
                        ObjUl.append(Objli);
                    }
                    // ObjUl.addClass("gallery__grid-small");
                    ObjUl.addClass("slider__list");
                    ObjUl.elastislide();
                    var carousel = $('<div class="slider"></div>');
                    carousel.append(ObjUl).find('.slider__thumbnail').bind('click', function(){
                        carousel.find('.slider__thumbnail_selected').removeClass('slider__thumbnail_selected');
                        $(this).addClass('slider__thumbnail_selected');

                        $youtube = $(this).data('video');
                        $largePhoto = $(this).data('large');
                        var $titlePhoto = $(this).attr('title');

                        if ($largePhoto && !$youtube) {
                            $('<img alt=""/>').on('load', function(){
                                self.$fullimage.find('iframe').fadeOut(500, function(){
                                    self.$fullimage.find('img').fadeIn(500).attr('alt', $titlePhoto).attr('title', $titlePhoto).attr('src', $largePhoto);
                                })
                            }).attr('alt', $titlePhoto).attr('title', $titlePhoto).attr('src', $largePhoto);
                        }else{
                            self.$fullimage.find('img').fadeOut(500, function() {
                                self.$fullimage.find('iframe').fadeIn(500).attr('src', $youtube);
                            });
                        }
                    });
                    self.$detailsLeftPart.append(carousel);
                }else{
                    self.$detailsLeftPart.find('.gallery__grid-small').remove();
                }


                // preload large image and add it to the preview
                // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
                if( self.$fullimage.is( ':visible' ) ) {
                    this.$loading.show();

                    var iframe = $('<iframe class="gallery__video" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>');
                    var img = $( '<img class="gallery__full-img" alt=""/>' );

                    self.$fullimage.append(iframe);
                    self.$fullimage.append(img);

                    var firstChild  = self.$item.children('a').find('img');
                    var $youtube    = firstChild.data( 'video' );
                    var $largePhoto = firstChild.data( 'largesrc' );

                    // && (typeof $youtube != undefined)

                    if($largePhoto){
                        img.on('load', function() {
                            var $img = $( this );
                            if( $img.attr( 'src' ) === $largePhoto ) {
                                self.$loading.hide();
                                // self.$fullimage.find('iframe, img').fadeOut(500, function(){
                                //     self.$fullimage.find('img').attr('src', $largePhoto);
                                // });
                                self.$fullimage.find( 'img' ).remove();
                                self.$largeImg = $img.fadeIn( 350 );
                                self.$fullimage.find('iframe').fadeOut(150, function(){
                                    self.$fullimage.append( self.$largeImg );
                                });
                            }
                        } ).attr( 'src', eldata.large[0] );

                    }else{
                        self.$loading.hide();
                        self.$fullimage.find('img').fadeOut(500, function(){
                            self.$fullimage.find('iframe').fadeIn(500).attr('src', $youtube);
                        });
                    }
                }

            }
        },
        open : function() {

            // setTimeout( $.proxy( function() {
                // set the height for the preview and the item
                this.setHeights();
                // scroll to position the preview in the right place
                this.positionPreview();
            // }, this ), 25 );

        },
        close : function() {

            var self = this,
                onEndFn = function() {
                    if( support ) {
                        $( this ).off( transEndEventName );
                    }
                    self.$item.removeClass( 'gallery__grid-item_opened' );
                    self.$previewEl.remove();
                };

            // setTimeout( $.proxy( function() {

                if( typeof this.$largeImg !== 'undefined' ) {
                    this.$largeImg.hide();
                    // this.$largeImg.fadeOut( 'fast' );
                }
                this.$previewEl.css( 'height', 0 );
                // the current expanded item (might be different from this.$item)
                // var $expandedItem = $items.eq( this.expandedIdx );
                // $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );
                // $expandedItem.hide();
                $items.find('.gallery__popup-overlay').hide();

                if( !support ) {
                    onEndFn.call();
                }

            // }, this ), 25 );

            return false;

        },
        calcHeight : function() {

            var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
                itemHeight = winsize.height;

            if( heightPreview < settings.minHeight ) {
                heightPreview = settings.minHeight;
                itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
            }

            this.height = heightPreview;
            this.itemHeight = itemHeight;

        },
        setHeights : function() {

            var self = this,
                onEndFn = function() {
                    if( support ) {
                        self.$item.off( transEndEventName );
                    }
                    self.$item.addClass( 'gallery__grid-item_opened' );
                };

            // this.calcHeight();
            // this.$previewEl.css( 'height', this.height );
            // this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

            if( !support ) {
                onEndFn.call();
            }

        },
        positionPreview : function() {
            // Last change here for offsetTop
            // scroll page
            // case 1 : preview height + item height fits in window´s height
            // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
            // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height

            // console.log(this.$item.offset().top, this.$item[0].offsetTop, this.$item.data( 'offsetTop' ))

            var position = this.$item[0].offsetTop,
                previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

            var isFilter = localStorage.getItem("filter");
            var isFilterAll = localStorage.getItem("filter-all");

            if(isFilter === "false" && !isFilterAll === "false") {
                $body.animate( { scrollTop : this.$item.offset().top }, settings.speed );
            }

            if(isFilterAll === "true") {
                $body.animate( { scrollTop : this.$item.data( 'offsetTop' ) }, settings.speed );
            }
        },
        setTransition  : function() {
            this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
            this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
        },
        getEl : function() {
            return this.$previewEl;
        }
    }

    // return {
    //     init : init,
    //     addItems : addItems
    // };
    $grid.imagesLoaded( function() {
        // initialize some events
        initEvents();

        // get window´s size
        getWinSize();

        // save item´s size and offset
        saveItemInfo( true );

        // //init filter
        // localStorage.setItem("filter-all", true);
    } );

}
