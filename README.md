Real World OCaml v2
-------------------

This is the source code for the Real World OCaml 2nd edition, which
is still a work in progress.  The original edition was written by
Yaron Minsky, Anil Madhavapeddy and Jason Hickey, and the revised
edition is being lead by Yaron Minsky and Anil Madhavapeddy.  There
have been significant contributions to the revised tooling from
Ashish Agarwal, Jeremy Yallop, Frederic Bour, and Sander Spies.

An online snapshot of the development book is available from
<https://dev.realworldocaml.org>.  There is a Feedback pane on
each chapter which leads to a dedicated section on the OCaml
[discussion forum](https://discuss.ocaml.org) where you can register
broader feedback.  More specific issues such as typos can be
reported on the [issue tracker](https://github.com/realworldocaml/book/issues).

## Repository layout

The book is structured as HTML sources that are transformed into
the online site via OCaml scripts. Code fragments are evaluated
and inserted into the book via custom `<link>` tags in the source code.

If you wish to build the book yourself, then you will need to be
familiar with the [opam](https://opam.ocaml.org) pinning workflow.

There are three main repositories for the book:

- <https://github.com/realworldocaml/scripts> contains the `rwo`
  opam package which provides the binaries for build and dependency
  analysis of the book sources.  These scripts are currently unreleased
  and so need to be pinned to master via opam.  The working branch
  is currently the `v2` branch.
- <https://github.com/realworldocaml/examples> contain the source
  code fragments which are evaluated and inserted into this book.
  They can be checked out separately for easy building by readers.
  The code fragments are evaluted by the `rwo` tool by using the
  [ocaml-topexpect](https://github.com/let-def/topexpect) toplevel
  parser.  The working branch is currently the `v2` branch.
- <https://github.com/realworldocaml/book> is this repository, whic
  uses the scripts and examples repositories to compile the HTML
  site online.

All of the code and examples are built using OCaml 4.04.2.

## Continuous Integration

There are three separate Travis CI pipelines that test each
of the repositories:

- [scripts](https://travis-ci.org/realworldocaml/scripts) : just builds the binaries
- [examples](https://travis-ci.org/realworldocaml/examples) : evaluates the examples and then commits the results to the `v2-sexp` branch.  The sexp files are used as a cache by the HTML book builder, to incrementally reduce build time.
- [book](https://travis-ci.org/realworldocaml/book) : builds and deploys the live website to GitHub pages.
