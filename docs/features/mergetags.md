# 🔄 Parameters (Merge Tags)

**Merge tags** are values that cannot be hard-coded into notification designs and must be passed in programmatically from your code. For examples:

- `Hello {{firstName}}`
- A button's URL: `https://dashboard.com/{{org.id}}`
- A user photo: `/imgs/{{user.imagePath}}.png`
- Or even logic: `Hello{%if user.firstName %} {{user.firstName}}{%endif%}!`

## Playground

The tool below let's you test and learn how merge tags work!

import Parameters from '../assets/reactComponents/Parameters';

<Parameters />

## Support

You can use merge tags almost everywhere:

- Email Subject Line
- Email Content: Text, Button Link, Image Link, ...
- `From Address` and `From Name` in Template Editor
- All fields of In-App, SMS, Call, Mobile Push and Web Push

## Passing the values

Use the `mergeTags` fields in the SDKs or APIs to pass in dynamic data. You can even pass in very complex objects and arrays.

```js
notificationapi.send({
  ...,
  mergeTags: {
    item: 'Krabby Patty Burger',
    address: '124 Conch Street',
    orderId: '1234567890'
  }
);
```

## Placing the merge tags in templates

In any of the template editors, use `{{` and `}}` to place the merge tag. For example, when editing an email, you can type:

> Hello {'{{'} firstName {'}}'}! You have a new alert: {'{{'} alerts[0].title {'}}'}

## Filters

You can use filters to format the data passed. For example, you can use the following snippet to capitalize the firstName: `{{ firstName | capitalize }}`

You can also chain filters together: `{{ firstName | capitalize | strip }}`.

Some of the most valuable filters are:

- `date`: Useful for formatting dates and times. [reference](https://liquidjs.com/filters/date.html)
- `capitalize`: Capitalizes the first letter of a string. [reference](https://liquidjs.com/filters/capitalize.html)
- `downcase`: Converts a string to lowercase. [reference](https://liquidjs.com/filters/downcase.html)
- `upcase`: Converts a string to uppercase. [reference](https://liquidjs.com/filters/upcase.html)
- `replace`: Replaces all occurrences of a substring with another substring. [reference](https://liquidjs.com/filters/replace.html)
- `truncate`: Truncates a string to a specified length. [reference](https://liquidjs.com/filters/truncate.html)
- `size`: Returns the number of items in an array or characters in a string. [reference](https://liquidjs.com/filters/size.html)

[List of all filters and their references](https://liquidjs.com/filters/overview.html)

## Size Limit

When using parameters (merge tags) in the body of your notifications, it is recommended that the size of the combined parameters not exceed 150 KB. Exceeding this limit may result in delivery failure, or an API error.

## Conditional Logic (if, else)

You can use conditional logic to show or hide content based on the data passed in.

```md title="Template Editor"
{% if firstName %}
Hello {{firstName}}!
{% else %}
Hello there!
{% endif %}
```

### Supported Operators

- Comparison: `==`, `!=`, `<`, `>`, `>=`, `<=`
- Logic: `and`, `or`

A more complex example:

```md title="Template Editor"
{% if alerts and alerts.size > 1 %}
You have {{alerts.size}} new alerts!
{% elseif alerts and alerts.size == 1 %}
You have a new alert!
{% else %}
You have no new alerts.
{% endif %}
```

You can also use switch/case style conditions. [reference](https://liquidjs.com/tags/case.html)

## Loops (for)

You can use loops to repeat words or even sections of the templates:

```md title="Template Editor"
{% for alert in alerts %}
Alert: {{alert.title}}
URL: https://myapp.com/alerts/{{alert.id}}
{% endfor %}
```

Here are [more complex examples](https://liquidjs.com/tags/for.html) with else, break and continue.

## Complete Documentation

We have built our templating engine based on Shopify's [Liquid templating engine](https://shopify.github.io/liquid/), so you can use the same syntax and features.
