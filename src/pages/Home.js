import React from 'react'
import {Grid,Paper,Avatar,Typography,Box,Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import Alert from '@material-ui/lab/Alert';
import {connect} from 'react-redux'
import {addQuestion,deleteAllQuestions} from '../redux/actions/questionAction'
import {QuestionItem, Tooltip,QandAForm} from "../components";
import './home.css'



class Home extends React.Component{




    state={
        question: '',
        answer: '',
        delaySubmission: false,
        data : []
    };
    //
    // componentDidMount() {
    //     this.setState({
    //         data: this.props.qAndA
    //     })
    // }

    // showAnswer = (question) => {
    //
    //     var data = {...this.state.data};
    //     data.isAnswerVisible = true;
    //     this.setState({
    //         data: data
    //     })
    // };


    // A function to delete all the questions one time
    deleteAllQuestions = () => {
        this.props.deleteAllQuestions()
    }

    // A function to sort the questions Alphabitiquely
    sortQuestions = () => {
        var data = this.state.data.sort(function(a, b) {
            return a['question'].localeCompare(b['question']);
        });
        this.setState({
            data: data
        })
    }



    render(){

        return(

            <main className="container main">
                <Grid container justify="center" spacing={4}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Tooltip message="Here you can create new questions and their answers">
                            <h3 className="row">Created questions</h3><br/>
                        </Tooltip>
                    </Grid>
                    {this.props.qAndA.length > 0 ?
                        this.props.qAndA.map( item =>
                            <Grid item key={item.id} lg={12}>
                                <QuestionItem key={item.id} item={item}/>
                            </Grid>
                            )
                        :
                        <Grid className="alert-container">
                            <Box m={3}>
                                <Alert icon={false} severity="error">No question available :(</Alert>
                            </Box>
                        </Grid>
                    }
                    <Grid container direction="row"  justify="center"
                          alignContent="flex-start">
                        <Box mr={2}>
                            <Button variant="outlined"
                                    color="primary"
                                    onClick={this.sortQuestions}
                                    startIcon={<SortByAlphaIcon/>}
                            >
                                Sort questions
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="outlined"
                                    color="secondary"
                                    onClick={this.deleteAllQuestions}
                                    startIcon={<DeleteIcon />}
                            >
                                Delete all questions
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                    <Grid container direction="row"  justify="center"
                          alignContent="center">
                        <Grid item xs zeroMinWidth>
                            <Box mt={10}>
                                <QandAForm/>
                            </Box>
                        </Grid>
                    </Grid>
            </main>
        )
    }
}



const mapStateToProps = state => {
    return {
        qAndA: state.questionReducer.qAndA
    }
}

export default connect(
    mapStateToProps,
    {
        addQuestion,
        deleteAllQuestions
    })(Home)