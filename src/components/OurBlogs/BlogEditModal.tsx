import React, { Component } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import ClassIcon from '@mui/icons-material/Class';
import DeleteIcon from "@mui/icons-material/Delete";
import { withStyles } from "@mui/styles";

import blogpic from '../../assets/images/Blogimages/blogimg-1.png';
import {BlogStyles} from './OurBlog.Style';

interface blogP{
    classes: any;
    open: boolean;
    close: ()=>void
}
class BlogEditModal extends Component<blogP> {

  render() {
    const {open, close, classes} = this.props;
    return (
      <>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Grid container columnSpacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img src={blogpic} width="100%" alt="blog img" />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                        <Typography className={classes.editFeilds}>
                            Blog Title
                        </Typography>
                        <TextField placeholder="blog name" 
                            fullWidth
                        />
                        <Typography className={classes.editFeilds}>
                            Description
                        </Typography>
                        <TextField maxRows={5} placeholder="blog description"
                            fullWidth multiline
                        />
                    </Box>
                    
                    <Box sx={{
                        mt:2,
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
                        <Button startIcon={<ClassIcon />}
                          sx={{
                            px:6,
                            color:'#fff',
                            background:'#E7A356',
                            borderRadius:'5px',
                            fontFamily: 'Fira Sans',
                            fontWeight: 700,
                            fontSize: '20px',
                            // lineHeight: '48px',
                            textTransform:'capitalize',
                            '&:hover':{
                              color:'#fff',
                            background:'#E7A356',
                            }
                          }}
                        
                        >
                          Save
                        </Button>
                        <Button startIcon={<DeleteIcon />}
                          sx={{
                            px:5,
                            color:'#fff',
                            background:'#272522',
                            borderRadius:'5px',
                            fontFamily: 'Fira Sans',
                            fontWeight: 700,
                            fontSize: '20px',
                            // lineHeight: '48px',
                            textTransform:'capitalize',
                            '&:hover':{
                              color:'#fff',
                              background:'#272522',
                            }
                          }}
                        >
                          Delete
                        </Button>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        </Modal>
      </>
    );
  }
}

export default withStyles(BlogStyles)(BlogEditModal);
