const ejs = require('ejs')
const path = require('path')
const pdf = require('html-pdf-phantomjs-included')
const router = require('express').Router()
const VideoCards = require('../models/VideoCards')


router.post('/',async (req,res)=>{ 
    const{name,memorySize,manufacturer}=req.body 
    if(!name||!memorySize||!manufacturer){ 
        res.status(422).json({error:"Please, fill all the fields"});
        return

    }

    const videoCards = {

        name,
        memorySize,
        manufacturer,
        
    }
    
    try{

        await VideoCards.create(videoCards)
        res.status(201).json({message: 'Success!'})

    }catch(error){
        res.status(500).json({error:error})
    }

})




router.get('/', async (req, res) => {
    try{
        const videoCards = await VideoCards.find()
        const filePath = path.join(__dirname,"../template.ejs")
        const pdfFile = path.join(__dirname,"../../videoCards.pdf")
        ejs.renderFile(filePath, {videoCards}, (err,html)=>{

            if(err){
                return res.send('Error reading file')
            }
            const options = {
                height: "11.25in",
                width: "8.5in",
                header:{
                    height: "20mm"
                },
                footer:{
                    height:"20mm"
                }
            }
        
            pdf.create(html,options).toFile("videoCards.pdf",(err)=>{
                if(err){
                    return res.send("some kind of error when generating PDF file")
                    
                }
                return res.download(pdfFile)
                
            })
           })
        
    }catch(error){
        res.status(500).json({error:error})
    }
   
})

module.exports = router