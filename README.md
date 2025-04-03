# A simple shared components library for VueJS

This library was built as a learning experience to build sharable components for VueJS.

# InputTextField

This is a simple input field component to display to the user for input.

## Usage

At the top of the VueJS file import the InputTextField
```
import { ref } from 'vue';
import { InputTextField } from '@sarcastyx/shared-components';
...

const email = ref('');
```

In the file wherever you need a text field
```
<InputTextField
  field-label="Email"
  field-id="email"
  field-name="email"
  :tab-index="1"
  :required="true"
  v-model="email" />
```

The important fields are `field-label`, `field-id`, `field-name`, and `model`. Passing the `model` will make it a 2 way binding. `tab-index` is not required and defaults to `1` or pass any number as you want to use. `required` is a boolean field and defaults to `false`.

# ButtonComponent

This creates a simple button for the form.

## Usage

At the top of the VueJS file import the `ButtonComponent`
```
...
import { ButtonComponent } from '@sarcastyx/shared-components';
...

```

Wherever you want to add the button on the page:
```
<ButtonComponent 
  button-label="Submit"
  button-type="button"
  :tab-index="2" />
```

This will create the button with the label `Submit` and `tabindex` of `2`. The default `button-type` is `submit`.

There is extra functionality where you can pass a callback function to the `ButtonComponent` to run this when the button type is set to `button`. 

To use this callback function create the function first
```
const callbackFunction = () => {
  alert('Hello world!');
}
```

Then when you create the button pass this in the `clickhandler` option
```
<ButtonComponent 
  button-label="Submit"
  button-type="button"
  :tab-index="2"
  :clickhander="callbackFunction" />
```