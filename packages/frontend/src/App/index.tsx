import plusnew, { component } from '@plusnew/core';
import style from './app.scss';

export default component('App', () => {
	return (
		<div class={style.container}>
			<h1>Hello Budof, my friend :)</h1>
		</div>
	);
});
