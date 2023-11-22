import {Request, Response} from 'express';
import Drug from '../models/drug';

export const getDrugs = async (req: Request, res: Response) => {
    
    const listDrugs = await Drug.findAll()

    res.json(listDrugs)
}

export const getDrug = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const drug = await Drug.findByPk(id);

    if (drug) {
        res.json(drug);
    } else {
        res.status(404).json({ 
            msg: `Not able to locate drug with id ${id}`
        });
    }
}

export const deleteDrug = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const drug = await Drug.findByPk(id);

    if(!drug) {
        res.status(404).json({
            msg: `No drug found with the id of ${id}`
            })
    } else {
        await drug.destroy();
        res.json({
            msg: "Successfully deleted"
            })
    }
}

export const postDrug = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        await Drug.create(body);

        res.json({
            msg: "Successfully created"
            })
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ups, get in touch with support'
        })
    }
}

export const putDrug = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    const drug = await Drug.findByPk(id);

    try{
        if(drug){
            await drug.update(body);
            res.json({
                msg: "Successfully updated"
                })
        } else {
            res.status(404).json({
                msg: `No drug found with the id of ${id}`
                })
        }

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Ups, get in touch with support'
            })
        }

}

