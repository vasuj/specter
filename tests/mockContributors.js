//In decreasing order of privileges admin > user > guest. 

exports.contributors = {
    
    admins :[ {
        
        name : "Akshat Jiwan Sharma",
        secret : 'dont#fail@',
        about : ''
        
    }],
    
    users : [
        
        {
            name : "Not an admin",
            secret : 'get@creative#',
            about : ''
        },
		{
        
        name : "Akshat Jiwan Sharma",
        secret : 'dont#fail@',
        about : ''
        
    }
    ],
    
    guests : [
        {
            name : 'A guest',
            secret : 'by!invitation&',
            website : ''
        },
		 {
            name : "Not an admin",
            secret : 'get@creative#',
            about : ''
        }
    ]
};