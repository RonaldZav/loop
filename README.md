# 🔁 LOOP FOR JAVASCRIPT
`@ronaldzav/loop` is a lightweight, flexible JavaScript/TypeScript package for creating loops with callback functions. It allows the execution of repetitive tasks with advanced options, such as adding delays between each iteration.

Install the package using `npm i @ronaldzav/loop`.

### Import Package:
```js
const loop = require('@ronaldzav/loop'); // If you uses javascript
import loop from '@ronaldzav/loop'; // If you uses typescript
```
## How to Use:
```js
loop(timesToRepet, sleepTime, (i) => { console.log("Loop " i + 1) })
```

## Example:
```js
loop(3, 2000, (i) => {
    console.log(`Loop ${i + 1}`);
})
```

#### Terminal:
```sh
Loop 1
# wait 2 seconds
Loop 2
# wait 2 seconds
Loop 3
```