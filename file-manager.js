const folderStructure = {
    name: "Home",
    type: "folder",
    children: [
        {
            name: "Links",
            type: "folder",
            children: [
                { name: "Resume.docx", type: "file" },
                { name: "CoverLetter.docx", type: "file", link: "googe.com"},
            ],
        },

        {
            name: "Documents",
            type: "folder",
            children: [
                {
                    name: "blogs",
                    type: "file",
                    link: "[main]",
                }
            ]

        },
        
    ]
};
