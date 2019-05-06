# Apollo iOS Hello World app

This is a simple example Apollo iOS app.

## Server

This app talks to the frontpage example server, available [here](https://github.com/apollographql/frontpage-server). Follow the instructions there and start the server before running the iOS app. (You can find the equivalent React app [here](https://github.com/apollographql/frontpage-react-app) if you want to run them side by side.)

## Starting the app

Open `FrontPage.xcworkspace` and press the run button to run the app. It should load a list of posts and display their titles, authors and number of votes in a table view. You can also upvote posts.

If you want to run on a device, change `localhost` to your machine's local IP address in `AppDelegate.swift`.

This is a very basic app, but it does demonstrate how you can hook up GraphQL query results to your UI. The code in `PostListViewController.swift` fetches data based on a GraphQL query defined in `PostListViewController.graphql`. That query refers to a fragment defined in `PostTableViewCell.graphql`, which nicely illustrates how you can describe your data needs next to the UI component that uses them.

## Generating GraphQL code

```
$ apollo client:codegen --target=swift ./FrontPage
```
