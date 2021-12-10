

// --------------------------
// post archive by: 
// --------------------------
// 1. special category 
// 2. special tag 

import service from "../Axios"

// ------------------------------------------------------
// getArchive
// ------------------------------------------------------
async function getTags() {
    
        //
        var res = await service.getTags()

        //
        return res.data.map(item => ({
            id: item.id,
            slug: item.slug,
            title: item.name 
        }));
}

//
export default getTags;