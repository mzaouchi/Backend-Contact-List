const ContactSchema = require('../models/Contact')

exports.AddContact = async (req,res)=>{
    const {name,email} = req.body;
    
    try {

       const newContact = new ContactSchema(req.body);
       const mawjoud = await ContactSchema.findOne({email})
       if(mawjoud){
            return res.status(400).send('Déja mawjoud')
       }
        await newContact.save();
        res.status(200).send('Ya3tik esa7a' + newContact);
    } catch (error) {
        res.status(500).send(`Ykeb sa3dek : ${error}`)
    }

}

exports.ShowContacts =  async (req,res)=>{
    try {
       const collectionContact =  await ContactSchema.find();
        res.status(200).send(collectionContact);
    } catch (error) {
        res.status(500).send(`Ykeb sa3dek : ${error}`)
    }
}


exports.DeleteContact = async (req,res)=>{
    const {id} = req.params
    try {
        const deletContact = await ContactSchema.findOneAndDelete({_id : id});
        res.status(200).send(deletContact);
    } catch (error) {
        res.status(500).send(`Ykeb sa3dek : ${error}`)
    }
}

exports.UpdateContact = async (req,res)=>{
    const {id} = req.params
    try {
        const updateContact = await ContactSchema.findByIdAndUpdate(id,{$set : {...req.body}})
        res.status(200).send(updateContact);
    } catch (error) {
        res.status(500).send(`Ykeb sa3dek : ${error}`)
    }
}

exports.ShowContactByID = async (req,res)=>{
    const {id} = req.params
    try {
       const collectionContact =  await ContactSchema.findById(id);
        res.status(200).send(collectionContact);
    } catch (error) {
        res.status(500).send(`Ykeb sa3dek : ${error}`)
    }
}