Comments for events assignment

I went through the new events assignment, here are some comments:

The final files that must be in the folder don't much with the actual files created using the instructions:

Required:

    README.md
    test_event.js
    main_domain.js
    main.js

Created:

    README.md
    test_instanceof.js
     test_domain.js
    main.js

I guess it's just a matter of names.

Also, in the last paragraph, when you ask:

"Simplify handleRequest by moving the 404 response code into a function named replyNotFound. Use the implementation of replyError as a model."

I'm assuming the changes must be made on main.js, since test_domain uses "throw Error" as required and it doesn't have a 404 response anymore.

Other than that, everything else works just fine.