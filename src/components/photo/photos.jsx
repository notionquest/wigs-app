import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardFooter } from "reactstrap";
import Sharing from "./sharing";
import Page from "../page/page";

class Photos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wigs: [{
                id: 1,
                imgsrc: 'https://i.picsum.photos/id/34/300/300.jpg',
                title: 'Red Hair',
                size: 1
            }, {
                id: 2,
                imgsrc: 'https://i.picsum.photos/id/1/300/300.jpg',
                title: 'Computer',
                size: 1
            }, {
                id: 3,
                imgsrc: 'https://i.picsum.photos/id/10/300/300.jpg',
                title: 'Trees',
                size: 1
            }, {
                id: 4,
                imgsrc: 'https://i.picsum.photos/id/12/300/300.jpg',
                title: 'Sea shore',
                size: 1
            }, {
                id: 5,
                imgsrc: 'https://i.picsum.photos/id/14/300/300.jpg',
                title: 'Sea shore 2',
                size: 1
            }, {
                id: 6,
                imgsrc: 'https://i.picsum.photos/id/16/300/300.jpg',
                title: 'Falls',
                size: 2
            },
            {
                id: 7,
                imgsrc: 'https://i.picsum.photos/id/17/300/300.jpg',
                title: 'Red Hair',
                size: 2
            }, {
                id: 8,
                imgsrc: 'https://i.picsum.photos/id/18/300/300.jpg',
                title: 'Computer',
                size: 2
            }, {
                id: 9,
                imgsrc: 'https://i.picsum.photos/id/19/300/300.jpg',
                title: 'Trees',
                size: 2
            }, {
                id: 10,
                imgsrc: 'https://i.picsum.photos/id/20/300/300.jpg',
                title: 'Sea shore',
                size: 2
            }, {
                id: 11,
                imgsrc: 'https://i.picsum.photos/id/21/300/300.jpg',
                title: 'Sea shore 2',
                size: 2
            }, {
                id: 12,
                imgsrc: 'https://i.picsum.photos/id/22/300/300.jpg',
                title: 'Falls',
                size: 2
            }, {
                id: 13,
                imgsrc: 'https://i.picsum.photos/id/16/300/300.jpg',
                title: 'Falls',
                size: 3
            },
            {
                id: 14,
                imgsrc: 'https://i.picsum.photos/id/17/300/300.jpg',
                title: 'Red Hair',
                size: 3
            }, {
                id: 15,
                imgsrc: 'https://i.picsum.photos/id/18/300/300.jpg',
                title: 'Computer',
                size: 3
            }, {
                id: 16,
                imgsrc: 'https://i.picsum.photos/id/19/300/300.jpg',
                title: 'Trees',
                size: 3
            }, {
                id: 17,
                imgsrc: 'https://i.picsum.photos/id/20/300/300.jpg',
                title: 'Sea shore',
                size: 3
            }, {
                id: 18,
                imgsrc: 'https://i.picsum.photos/id/21/300/300.jpg',
                title: 'Sea shore 2',
                size: 3
            }, {
                id: 19,
                imgsrc: 'https://i.picsum.photos/id/22/300/300.jpg',
                title: 'Falls',
                size: 3
            }],
            page: {
                numberOfPages: 3,
                currentPage: 1
            }
        };
    }
    render() {
        return (
            <div>
                <CreateCard wigs={this.state.wigs} />
                <Page page={this.state.page}/>
            </div>
        );
    }
}

function CreateCard(props) {
    const wigs = props.wigs;
    let finalArr = [], photos = [];

    wigs.forEach((wig, index) => {
        photos.push(
            <div className="col-4">
                <Card className="border-dark mb-3">
                    <CardBody>
                        <CardSubtitle><p className="font-weight-bold">{wig.title}</p></CardSubtitle>
                    </CardBody>
                    <img width="100%" src={wig.imgsrc} alt="" />
                    <CardFooter>
                        <div>
                            <Sharing wigInfo={wig} />
                        </div>
                    </CardFooter>
                </Card>
            </div >
        );
        if ((index + 1) % 3 === 0) {
            finalArr.push(<div className="row">{photos}</div>);
            photos = [];
        }
    });

    return finalArr;
}

export default Photos;