import plusnew, { component, Props} from '@plusnew/core';

type props = {
    value: string,
};

export default component(
    'App',
    (Props: Props<props>) =>
        <h1><Props>{(props) => {
            return props.value
        }}</Props></h1>

)