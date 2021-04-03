You have been asked to edit a document from the Acquisition and Guidance Wavelength System team. You need to generate the "GMT ID" identifier of the system requirements ("Requirement") and update the second table. The table to be edited has two types of artifacts: "Information" and "Requirement". Each row in the second table is an artifact. Only artifacts of type "Requirement" should be given a "GMT ID". The "GMT ID" field for "Information" artifacts must always remain empty! To update the second table with the "GMT IDs" that you generate, it is mandatory that your program uses the "RUN" button, which is already in the HTML. That is, the page cannot change until the user clicks the button. Only after pressing the button should the table be updated.

The "GMT ID" is a set of 4 pieces of information, separated by a hyphen "-", available in the two tables provided. The 4 pieces of information are:

    1 - Document Type: If the document title starts with "REQ", use "REQ". If it is "ICD", use "ICD". The document title is the header of the first table, in bold;
    2 and 3 - Level and component: see the "Prefix" line of the first table. The component and level appear in this order and are separated by a slash "/";
    4 - ID: this information is unique to each artifact and is in the second table (document table). Each artifact has a unique ID and this number must be used to complete the GMT ID.

Examples of GMT ID:

    - [TYPE]-[LEVEL]-[COMPONENT]-[ID]
    - ICD-L4-MNT-54083
    - REQ-L2-AGWS-100632
    - REQ-L3-SECore-45322

In summary, you should generate the "GMT IDs" of the "Requirement" artifacts from the second table, but only after clicking on the "RUN" button. To do this you should use your knowledge of JavaScript (required), HTML, DOM manipulation, and Git to do the necessary manipulations. Feel free to edit the HTML and CSS of this project.