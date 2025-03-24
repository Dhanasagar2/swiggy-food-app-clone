 
 const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "hi iam h1"),
            React.createElement("h2", {}, "hi iam h2")
        ]
    ),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "hi iam h1"), 
            React.createElement("h2", {}, "hi iam h2")
        ]
    )
    ]
);

    console.log(parent);
      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(parent);