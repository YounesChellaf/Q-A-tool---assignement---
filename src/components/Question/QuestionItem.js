import React from 'react'
import {Card,Box,Typography,CardContent,TextField,FormControl,IconButton,Button,Grid} from  '@material-ui/core'
import {DeleteOutline,EditOutlined} from '@material-ui/icons'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

import {connect} from 'react-redux'
import {deleteQuestion,editQuestion} from '../../redux/actions/questionAction'
import './QuestionItem.css'

class QuestionItem extends React.Component{

    state = {
        isAnswerVisible : false,
        isEditable : false,
        QandA : this.props.item
    }


    handleChange = (e) => {
        const currentQandA = {...this.state.QandA};
        currentQandA[e.target.name] = e.target.value;
        this.setState({
            QandA : currentQandA
        });
    }

    showAnswer = () => {
        this.setState({
            isAnswerVisible: ! this.state.isAnswerVisible
        })
    }


    deleteQandA = () => {
        this.props.deleteQuestion(this.props.item)
    };

    showEditableFields = () => {
        this.setState({
            isEditable : ! this.state.isEditable
        })
    }


    // Handle a redux action to update the QandA
    editQuestion = () => {
        this.props.editQuestion(this.props.item,this.state.QandA)
        this.showEditableFields()
    }



    render(){
        return(
            <Card className="questionContainer">
                <CardContent>
                    {
                        this.state.isEditable ?
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="flex-start"
                            >
                            <Grid item xs={12} sm={5} md={4} lg={5}>
                                <Box m={1}>
                                    <FormControl fullWidth>
                                        <TextField id="outlined-basic"
                                                   label="Question"
                                                   variant="outlined"
                                                   multiline
                                                   name="question"
                                                   value={this.state.QandA.question}
                                                   onChange={this.handleChange}

                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                                <Grid  item xs={12} sm={5} md={4} lg={5}>
                                    <Box m={1}>
                                        <FormControl fullWidth>
                                            <TextField id="outlined-basic"
                                                       label="Answer"
                                                       variant="outlined"
                                                       multiline
                                                       name="answer"
                                                       value={this.state.QandA.answer}
                                                       onChange={(e) => this.handleChange(e)}

                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid justify="center" item xs={12} sm={2} md={4} lg={2}>
                                    <Box m={1}>
                                        <Button variant="outlined"
                                                color="primary"
                                                onClick={this.editQuestion}
                                        >
                                            Edit question
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>

                            :
                            <div className="item-content">
                                <Grid
                                    container
                                    direction="row"
                                    spacing={2}
                                >
                                    <Grid container item xs={8} lg={9}>
                                        <Box m={1}>
                                            <Typography variant="h6">
                                                {this.props.item.question}
                                            </Typography>
                                        </Box>
                                        <Grid
                                            container
                                            direction="row"

                                        >
                                            {this.state.isAnswerVisible &&
                                            <Box m={1}>
                                                <Typography variant="body">
                                                    {this.props.item.answer}
                                                </Typography>
                                            </Box>
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} lg={3}>
                                        <div className="item-actions">
                                            <IconButton onClick={this.showAnswer}>
                                                {this.state.isAnswerVisible
                                                    ? <VisibilityOffOutlinedIcon/>
                                                    : <VisibilityOutlinedIcon/>
                                                }
                                            </IconButton>
                                            <IconButton className="ml-2" onClick={this.showEditableFields}><EditOutlined/></IconButton>
                                            <IconButton className="ml-2" onClick={this.deleteQandA}><DeleteOutline/></IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                    }
                </CardContent>
            </Card>
        )
    }
}

export default connect(null,{deleteQuestion,editQuestion})(QuestionItem)