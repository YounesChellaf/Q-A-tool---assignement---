import React from 'react'
import {Grid,TextField,FormControl,Box,Button,FormControlLabel,Checkbox} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import {addQuestion} from "../../redux/actions/questionAction";
import Tooltip from '../Tooltip/Tooltip'
import {connect} from "react-redux";
import './QandA.css'


class QandAForm extends React.Component{

    state= {
        question: '',
        answer: '',
        delaySubmission: false,
    }

    handleChanges = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name] : value
        })
    }

    // A function to add QA
    addQuestionComponent = () => {
        const QA = {
            id: this.props.qAndA.length +1,
            question : this.state.question,
            answer : this.state.answer,
        }

        this.props.addQuestion(QA)

        // var delay= 0;
        //
        // this.state.delaySubmission ?  delay = 5000 : delay=0;
        //
        // setTimeout(()=>{
        //     this.setState({
        //         data: [...this.state.data,QA]
        //     })
        // },delay)
    }

    render(){
        return(
            <Grid container justify="center" spacing={1}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Tooltip message="Here you can create new questions and their answers">
                        <h3 className="row">Create a new questions</h3><br/>
                    </Tooltip>
                </Grid>
                <Grid  className="add-question-container" item xs={12} sm={8} md={6} lg={6}>
                        <FormControl fullWidth>
                            <TextField id="outlined-basic"
                                       label="Question"
                                       variant="outlined"
                                       multiline
                                       value={this.state.question}
                                       onChange={(e)=> this.handleChanges(e)}
                                       name="question"

                            />
                        </FormControl>
                        <FormControl className="answer-input" fullWidth >
                            <TextField id="outlined-basic"
                                       label="Answer"
                                       multiline
                                       variant="outlined"
                                       value={this.state.answer}
                                       onChange={(e)=> this.handleChanges(e)}
                                       name="answer"

                            />
                        </FormControl>
                    <FormControlLabel
                        value="start"
                        control={
                            <Checkbox
                                checkedIcon={<AccessAlarmsIcon/>}
                                color="primary"
                                value={this.state.delaySubmission}
                                onChange={(e)=> this.handleChanges(e)}
                                name="delaySubmission"

                            />}
                        label="Would you like add a dalay for the question to be posted"
                        labelPlacement="end"
                    />
                    <Box>
                        <Button variant="outlined"
                                color="primary"
                                onClick={this.addQuestionComponent}
                                endIcon={<SendIcon/>}
                        >
                           Add my question
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        qAndA: state.questionReducer.qAndA
    }
}
export default  connect(mapStateToProps,{addQuestion})(QandAForm)