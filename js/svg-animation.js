import { TimelineLite, TweenMax } from 'gsap/TweenMax';

TweenMax.to('.move-code-to-left', 0, {x: 400, y: 10});
TweenMax.to('.move-code-to-right', 0, {x: -330});

TweenMax.staggerTo('#girl', 2.25, {
	transformOrigin: 'center',
	y: 5,
	rotation: 1,
	yoyo: true,
	repeat: -1
}, 1.1);

var girlBlinkAnim = new TimelineLite();

girlBlinkAnim.to('#girl-eyes', 5, {
	visibility: 'visible'
})
.to('#girl-eyes', 0.1, {
	visibility: 'hidden'
})
.to('#girl-eyes', 10, {
	visibility: 'visible'
})
.to('#girl-eyes', 0.1, {
	visibility: 'hidden'
})
.to('#girl-eyes', 0.1, {
	visibility: 'visible'
})
.to('#girl-eyes', 0.1, {
	visibility: 'hidden'
})
.call(function () {
	girlBlinkAnim.restart();
	girlBlinkAnim.play();
});

var girlMainBlinkAnim = new TimelineLite();

girlMainBlinkAnim.to('#girl-main-eyes', 6, {
	transform: 'translateZ(0) translate(0) scaleY(1)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(1)'
})
.to('#girl-main-eyes', 0.1, {
	transform: 'translateZ(0) translate(0) scaleY(0.2)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(0.2)'
})
.to('#girl-main-eyes', 0.1, {
	transform: 'translateZ(0) translate(0) scaleY(1)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(1)'
})
.to('#girl-main-eyes', 10, {
	transform: 'translateZ(0) translate(0) scaleY(1)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(1)'
})
.to('#girl-main-eyes', 0.1, {
	transform: 'translateZ(0) translate(0) scaleY(0.2)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(0.2)'
})
.to('#girl-main-eyes', 0.1, {
	transform: 'translateZ(0) translate(0) scaleY(1)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(1)'
})
.to('#girl-main-eyes', 0.1, {
	transform: 'translateZ(0) translate(0) scaleY(0.2)',
	webkitTransform: 'translateZ(0) translate(0) scaleY(0.2)'
})
.call(function () {
	girlMainBlinkAnim.restart();
	girlMainBlinkAnim.play();
});

var codeStripes = [];
var allStripes = document.querySelector('#animated-code');
var codeMask = document.querySelector('#SVGID_33_');
Array.from(allStripes.childNodes).forEach(function (node) {
	if (node.nodeType === 1) {
		codeStripes.push(node);
	}
});

function getNextStripe(stripeNum) {
	if (stripeNum >= 1) {
		codeStripes[stripeNum].classList.remove('stripe-hidden');
		return setTimeout(function () {
			getNextStripe(stripeNum - 1);
		}, 200);
	} else {

		codeMask.classList.add('moved-bottom');
		allStripes.classList.add('moved-top');

		setTimeout(function () {

			codeMask.classList.remove('moved-bottom');
			allStripes.classList.remove('moved-top');

			codeStripes.forEach(function (stripe) {
				stripe.classList.add('stripe-hidden');
			});
			setTimeout(function () {
				getNextStripe(codeStripes.length - 1);
			}, 500);
		}, 500);
	}
}

codeStripes.forEach(function (stripe) {
	stripe.classList.add('stripe-hidden', 'stripe');
});

getNextStripe(codeStripes.length - 1);




