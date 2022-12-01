## useClientSide - small and simple function, that allows you to run your scripts on the client side when using SSR mode on quasar framework
##
##
### Installation
##
```sh
npm install useClientSide -S
```

### Usage
##
```sh
import { useClientSide  } from '';

const scriptToExecute = () => {
    console.log('executed on client side!');
}

useClientSide(()=>{
    scriptToExecute(); //orPassCallBack func
});

//Use it anywhere in your app, tested on vue 3.0
```
