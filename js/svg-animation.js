import { TimelineLite, TweenMax } from 'gsap/TweenMax';
import Snap from 'snapsvg-cjs';

TweenMax.staggerTo('#laptop-girl', 2.25, {
	transformOrigin: 'center',
	y: 5,
	rotation: 1,
	yoyo: true,
	repeat: -1
}, 1.1);

// MAIN SCREEN GIRL: EYES BLINK ANIMATION
const girlMainBlinkAnim = new TimelineLite();

girlMainBlinkAnim.to('#girl-main-eyes', 2, {
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
	.to('#girl-main-eyes', 6, {
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


// LAPTOP GIRL: EYES BLINK ANIMATION

const girlBlinkAnim = new TimelineLite();

girlBlinkAnim.to('#laptop-girl-eyes', 5, {
	visibility: 'visible'
})
	.to('#laptop-girl-eyes', 0.1, {
		visibility: 'hidden'
	})
	.to('#laptop-girl-eyes', 10, {
		visibility: 'visible'
	})
	.to('#laptop-girl-eyes', 0.1, {
		visibility: 'hidden'
	})
	.to('#laptop-girl-eyes', 0.1, {
		visibility: 'visible'
	})
	.to('#laptop-girl-eyes', 0.1, {
		visibility: 'hidden'
	})
	.call(function () {
		girlBlinkAnim.restart();
		girlBlinkAnim.play();
	});


// CODE SCREEN ANIMATION

const codeLinesNodes = document.querySelector('.code-screen__code-lines');
const codeLines = Array.from(codeLinesNodes.childNodes).filter(function (node) {
	return node.nodeType === Node.ELEMENT_NODE;
});

function getNextLine(lineNumber) {
	if (lineNumber >= 1) {
		codeLines[lineNumber].classList.remove('code-screen__line_hidden');

		return setTimeout(function () {
			getNextLine(lineNumber - 1);
		}, 200);
	}

	const codeRightBlock = document.querySelector('.code-screen__right-side');
	codeRightBlock.classList.add('code-screen__right-side_moved-top');

	setTimeout(function () {
		codeRightBlock.classList.remove('code-screen__right-side_moved-top');

		codeLines.forEach(function (codeLine) {
			codeLine.classList.add('code-screen__line_hidden');
		});

		setTimeout(function () {
			getNextLine(codeLines.length - 1);
		}, 500);
	}, 500);
}

codeLines.forEach(function (codeLine) {
	codeLine.classList.add('code-screen__line_hidden', 'code-screen__line');
});

getNextLine(codeLines.length - 1);

// CURTAINS ANIMATION

function initCurtains() {
    const speed = 330;
    const easing = mina.backout;

    const curtains = document.querySelectorAll('.portfolio__link');

    Array.prototype.slice.call(curtains).forEach(function(curtain) {
        const snap = Snap(curtain.querySelector('svg'));
        const path = snap.select('path');

        const pathConfig = {
            from: path.attr('d'),
            to: curtain.getAttribute('data-path-hover'),
        };

        curtain.addEventListener('mouseenter', function() {
            path.animate({ 'path': pathConfig.to }, speed, easing);
        });

        curtain.addEventListener('mouseleave', function() {
            path.animate({ 'path': pathConfig.from }, speed, easing);
        });
    });
}

initCurtains();
