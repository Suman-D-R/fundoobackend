import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';

export const addNote = async (req, res, next) => {
  try {
    console.log('addNote req body:>', req.body);
    const data = await noteService.addNote(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'note created'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};


export const getAllNotes = async (req,res,next)=>{
    try{
        const data = await noteService.getAllNotes();
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data: data,
            message:'updated'
        })
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: error.message
          });
    }
}

export const updateNote = async (req,res,next)=>{
    try{
        const data = await noteService.updateNote(req.body);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data: data,
            message:'updated'
        })
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: error.message
          });
    }
}


export const deleteNote = async (req,res,next)=>{
    try{
        const data = await noteService.deleteNote(req.body);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data: data,
            message:'updated'
        })
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: error.message
          });
    }
}


export const achiveNote = async (req,res,next)=>{
    try{
        const data = await noteService.achiveNote(req.body);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data: data,
            message:'updated'
        })
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: error.message
          });
    }
}

export const deleteforever = async (req,res,next)=>{
    try{
        const data = await noteService.deleteforever(req.body);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data: data,
            message:'updated'
        })
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: error.message
          });
    }
}