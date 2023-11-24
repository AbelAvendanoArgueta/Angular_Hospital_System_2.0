import { Request, Response } from 'express';
import Doctor from '../models/doctor';

// Get a list of all doctors
export const getDoctors = async (req: Request, res: Response) => {
    const listDoctors = await Doctor.findAll();
    res.json(listDoctors);
};

// Get information about a specific doctor by ID
export const getDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const doctor = await Doctor.findByPk(id);

    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({
            msg: `Not able to locate doctor with id ${id}`
        });
    }
};

// Delete a doctor by ID
export const deleteDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const doctor = await Doctor.findByPk(id);

    if (!doctor) {
        res.status(404).json({
            msg: `No doctor found with the id of ${id}`
        });
    } else {
        await doctor.destroy();
        res.json({
            msg: "Successfully deleted"
        });
    }
};

// Add a new doctor
export const postDoctor = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Doctor.create(body);
        res.json({
            msg: "Successfully created"
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, get in touch with support'
        });
    }
};

// Update a doctor by ID
export const putDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const doctor = await Doctor.findByPk(id);

    try {
        if (doctor) {
            await doctor.update(body);
            res.json({
                msg: "Successfully updated"
            });
        } else {
            res.status(404).json({
                msg: `No doctor found with the id of ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, get in touch with support'
        });
    }
};
