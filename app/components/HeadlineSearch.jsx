import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component handles the Headline search input
 * @class HeadlineSearch
 * @extends {React.Component}
 * @type {Object}
 */
class HeadlineSearch extends React.Component {
  /**
   * HeadlineSearch class constructor
   * @param  {object} props - holds parameters passed from outside the component
   * @return {null}       - returns no value
   */
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }
/**
 * This method handles filtering through the news headlines sources
 * @param {string} event - event parameter
 * @memberof HeadlineSearch
 * @return {null} - no return value
 */
  handleSearch(event) {
    this.setState({
      searchText: event.target.value
    });
    this.props.onSearch(event.target.value);
  }
/**
 * This method renders the component
 * @memberof HeadlineSearch
 * @return {React.Component} - returns hierachy of views for this component
 */
  render() {
    return (
      <div className="container__header">
        <div>
          <input
            type="text" placeholder="Enter a news source you want"
            value={this.state.searchText} onChange={this.handleSearch}
          />
        </div>
        <div />
      </div>
    );
  }

}
HeadlineSearch.propTypes = {
  onSearch: PropTypes.func
};

HeadlineSearch.defaultProps = {
  onSearch: () => {}
};
export default HeadlineSearch;
