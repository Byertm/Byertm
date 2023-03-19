(function () {
	if (!!document) {
		function bwdAddStyle(styles) {
			let bwdCssEl = document.createElement('style');
			bwdCssEl.type = 'text/css';

			if (bwdCssEl.styleSheet) bwdCssEl.styleSheet.cssText = styles;
			else bwdCssEl.appendChild(document.createTextNode(styles));

			document.getElementsByTagName?.("head")?.[0]?.appendChild?.(bwdCssEl);
		}

		const options = {
			bgColor: '#333333',
			color: '#ffffff',
			position: 'fixed',
			filter: 'blur(2px)',
			fontSize: '2rem',
			opacity: 0.5,
			padding: '0.5rem 1rem',
			positionOptions: {
				top: 'auto',
				right: '1rem',
				bottom: '1rem',
				left: 'auto'
			},
			textTransform: 'capitalize',
			transitionOptions: {}
		};

		const opts = Object.assign(options, {});

		const cssStyles = `
			.byertm {
				position: ${opts.position || options.position};
				top: ${opts.positionOptions.top || options.positionOptions.top};
				right: ${opts.positionOptions.right || options.positionOptions.right};
				bottom: ${opts.positionOptions.bottom || options.positionOptions.bottom};
				left: ${opts.positionOptions.left || options.positionOptions.left};
				font-size: ${opts.fontSize || options.fontSize};
				padding: ${opts.padding || options.padding};
				text-transform: ${opts.textTransform || options.textTransform};
				background-color: ${opts.bgColor || options.bgColor};
				color: ${opts.color || options.color};
				transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
				filter: ${opts.filter || options.filter};
				opacity: ${opts.opacity || options.opacity};
				transition: 0.6s ease all;
			}
			.byertm:focus,
			.byertm:link,
			.byertm:hover,
			.byertm:visited {
				color: ${opts.color || options.color};
			}
			.byertm:hover {
				transform: perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
				filter: blur(0);
				opacity: 1;
			}
		`;
		bwdAddStyle?.(cssStyles);

		const bwdAEl = document.createElement('a');
		bwdAEl.href = 'https://byertm.github.io';
		bwdAEl.target = '_blank';
		bwdAEl.innerText = "ByertmWeb";
		bwdAEl.classList.add('byertm');
		document.body.appendChild(bwdAEl);
	}
})()