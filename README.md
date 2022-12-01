# useClientSide

- useClientSide - is a small and simple function, that allows you to run your scripts on the client side. It may be useful when you need to execute script using SSR framework, such as Nuxt js, Quasar framework and etc.
- This wrapper function is needed in order for the execution to be explicit for other devs and simple.
- tested on Quasar + Vue 3.0  &&  nuxt js

### Installation

```sh
npm i useclientside -S
```

### Usage

```sh
import { useClientSide } from 'useclientside';

const scriptToExecute = () => {
    console.log('executed on client side!');
}

useClientSide(() => {
    scriptToExecute(); //orPassCallBack func as-is
});

//Use it anywhere in your app, tested on vue 3.0
```
