import plusnew, { component } from '@plusnew/core';
import Test from './components/Test';

export default component(
	'App',
	() =>
		<div>
			<h1>Hello BudoF</h1>
			<Test value="Please Login"/>
		</div>

)