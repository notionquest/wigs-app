import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { times } from 'lodash';

class Page extends Component {
    constructor(props) {
        super();
        this.state = {
            page: props.page
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(e) {
        //console.log('Change page:', e);
        this.setState(prevState => ({
            page: {
                numberOfPages: prevState.page.numberOfPages,
                size: prevState.page.size,
                currentPage: e
            }
        }));
        //this.props.currentPage(e);
        this.props.onPaginate(e);
    };

    render() {
        return (
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled >
                    <PaginationLink first href="#" className="border-primary md-5" />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink previous href="#" className="border-primary md-5" />
                </PaginationItem>
                <CreatePages page={this.state.page} onClick={this.onChangePage} />
                <PaginationItem>
                    <PaginationLink next href="#" className="border-primary md-5" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" className="border-primary md-5" />
                </PaginationItem>
            </Pagination>
        );
    }
}

function CreatePages(props) {
    let pages = [];
    //console.log('Create page:', props.page);
    times(props.page.numberOfPages, (pageNo) => {
        let pageNumber = pageNo + 1;
        pages.push(
            <PaginationItem active={props.page.currentPage === pageNumber} key={pageNumber}>
                <PaginationLink href="#" className="border-primary md-5" onClick={() => props.onClick(pageNumber)} value={pageNumber}>
                    {pageNumber}
                </PaginationLink>
            </PaginationItem>
        );

    });
    return pages;
}

export default Page;