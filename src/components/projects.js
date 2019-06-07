import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover' }}>
                            React project #1
                    </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                            <Button colored> Live Demo</Button>
                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover' }}>
                            React project #2
            </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                            <Button colored> Live Demo</Button>
                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover' }}>
                            React project #3
        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                            <Button colored> Live Demo</Button>
                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h2>This is Java & MySQL</h2></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h2>Laravel & postgreSQL </h2></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h2>Ruby On Rails </h2></div>
            )
        }
    }


    render() {
        return (
            <div className="projects-container">

                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab><strong>React & HTML/CSS/JS</strong></Tab>
                        <Tab><strong>Java & MySQL</strong> </Tab>
                        <Tab><strong> Laravel & postgreSQL</strong> </Tab>
                        <Tab> <strong>Ruby on Rails </strong> </Tab>
                    </Tabs>
                    <Grid >
                        <Cell col={12}>
                            <div className="projects-background">
                            </div>
                            <div className="content" > {this.toggleCategories()} </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Projects;