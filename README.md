# Documentation for the blindnet SDK

The documentation is built using a static site generator [MkDocs](https://www.mkdocs.org/) with the [Material](https://squidfunk.github.io/mkdocs-material/) theme.

To build and run the docs locally, you need to have `pip3` installed in your system.

Run the following commands in your terminal:  
`pip3 install mkdocs-material`  
`pip3 install mkdocs-localsearch`  

Install insiders fork for the `Material` theme:  
https://squidfunk.github.io/mkdocs-material/insiders/getting-started/

To start the dev server, navigate to the project directory and run in your terminal:  
on `Linux`:  
`~/.local/bin/mkdocs serve`  
on `macOS`:  
`python3 -m mkdocs serve`  

and visit `localhost:8000`

To build the docs, use `mkdocs build` instead.