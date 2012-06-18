------------------------------------------------------
   Learning Backbon - 006 - Model Validation
------------------------------------------------------

This example purpose is to validate a model data when user compile a form.
This is a simple but real-world example.

We have 3 app blocks:
- a form
- a "result" area
- a model






-- The Form
the form contains 2 fields that cannot be left blank.

when a validation error happens the FormView tries to evidence wrong fiels.
when focusing a wrong field the field's status is reset to "normal".

FormView is able to handle a "reset" action and ask the connected model to be resetted to.








-- The Result Area (views/show_view.js)
the result area is very simple.
when the model's data changes we need to display a table with this data. we did it before!
when the form resets we need to remove existing content and display a welcome text or some instructions.

we decide to put our textual instructions into the index.html source code.
this may not be the best way to do this stuff but I decided to do it to show you how we can use the
initialize() method to fetch data from the document and store internally to the View Object to use it later.








-- The Model (models/person.js)
the model is the data abstraction layer for this article.

the model receives data from the form when the "FormView::submit_action" is performed,
it validates this data and trigger some events according to the validation results.

"change" happen if validation is passed.
"error" happen if validation fails.

our model listen to a custom request event "doReset".
when some external logic trigger a "doReset" event on our model the model calls "reset()" internal methos.

WHY TO USE THIS PATTERN?
some external logic may call "model.reset()" directly!

yes but triggering events is more safe than call metods!
you can trigger whatever event name you want on whatever (Backbone) object you have. It does nothing!
but if you call for a non-existing method... this is a fatal error!

this way is responsability of a model to connect a "request event" to an internal piece of logic!