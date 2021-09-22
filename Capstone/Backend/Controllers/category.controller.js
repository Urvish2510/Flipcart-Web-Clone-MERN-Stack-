const categoryModel = require('../Models/category.model');
const slugify = require('slugify');

addNewCategory = (req, res) => {

    const categoryInput = {
        name: req.body.name,
        slug: slugify(req.body.name, {
            lower: true
        })
    };

    console.log(categoryInput);

    /**
     * 
     * @example
     * categoryInput = {
     *      name: Electronics Devices,
     *      slug: 'electronics-devices'
     * };
     * 
     */

    if (req.body.parentId) {
        categoryInput.parentId = req.body.parentId;
    }

    const _category = new categoryModel(categoryInput);
    _category.save((error, category) => {

        if (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "DB Error occurred. Contact your administrator"
            });
        }

        if (category) {
            return res.json({
                success: true,
                message: "Category Successfully Saved",
                date: category
            })
        }
    })
}

getCategory = async (req, res) => {

    // categoryModel.find({}).exec((error, category) => {
    //     if (error) {
    //         console.log(error);
    //         return res.status(500).json({
    //             success: false,
    //             message: "DB Error occurred. Contact your administrator",
    //             error: error
    //         });
    //     }

    //     if (category) {
    //         console.log(category);
        
    //         return res.status(200).json({
    //             category
    //         });
    //     }
    // });


    try {
        const category = await categoryModel.find({});

        // const categoryTree = getcategoryTree(category);
        return res.status(200).json({
            category
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "DB Error occurred. Contact your administrator",
            error: error
        })
    }
}

function createCategories(allCategories, id = null){

    var categories = allCategories.filter(c => c.id === id); 

    var arr = [];
    for(var i = 0; i < categories.length; i++){
        const element = categories[i];
        var t = createCategories(allCategories, element._id);
        arr.push(t);
        return{
            category: element,
            subCategory: arr
        }
    }

}

module.exports = {
    addNewCategory,
    getCategory
};