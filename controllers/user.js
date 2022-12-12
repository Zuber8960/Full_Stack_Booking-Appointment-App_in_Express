
const User = require('../module/user');

exports.addUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;

        if (!phone) {
            throw new Error('Phone-number is mendatory !')
        }
        const data = await User.create({
            name: name,
            phone: phone,
            email: email
        })

        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

exports.getUser =  async(req, res, next) => {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers : users});
    }catch(err) {
        console.log(err);
        res.status(500).json({error : err})
    }
}


exports.deleteUser = async (req, res, next) => {
    try{
    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
        console.log('This user does not exist.');
        return res.sendStatus(400);
    }
    await user.destroy();
    res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}
