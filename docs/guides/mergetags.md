---
sidebar_position: 2
---

# Merge Tags

Used to customize the templates with dynamic data or logic.

Examples:

- Customizing the content: `Hello {{firstName}}`
- Redirecting the user to a dynamic location: `myapp.com/{{alerts[0].id}}`
- Showing dynamic images: `s3.aws.com/imgs/{{user.imagePath}}.png`
- Logic (if, loops) in the templates: `You have alert{%if alerts.size>1%}s{%endif%}!`

:::info
We have built our templating engine based on [Shopify's Liquid](https://shopify.github.io/liquid/), so you can use the same syntax and features.
:::

## Passing dynamic data from the back-end

Use the `mergeTags` fields in the SDKs or APIs to pass in dynamic data. You can even pass in very complex objects and arrays.

```js
notificationapi.send({
  ...,
  mergeTags: {
   firstName: 'John',
   accountId: 123,
   isActivated: true,
   alerts: [
      {
         id: 123,
         title: 'This is a new alert!'
      }
   ]
  }
);
```

## Displaying merge tags in templates

In any of the template editors, use `{{` and `}}` to display dynamic values:

```md title="Template Editor"
Hello {{ firstName }}!

Your have a new alert: {{ alerts[0].title }}
```

You can use tags pretty much everywhere:

- Email Subject Line
- Email Content: Text, Button Link, Image Link, ...
- All fields of In-App, SMS, Call, Mobile Push and Web Push

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

- Comparison: ==, !=, , <, >=, <=
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

[More complex examples](https://liquidjs.com/tags/for.html) with else, break and continue.
