export class NoteController {
    constructor({ model }){
        this.model = model;
    }

    getById = async (req, res) => {
        let { id } = req.params;

        id = parseInt(id);
        let data = await this.model.getById({ id });

        return res.json(data);
    }
}