import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    var resultItem = this.props.data;
    
    // Используем encodeURIComponent, чтобы пробелы в названии не ломали ссылку
    // Это и есть решение ошибки "недопустимое название"
    let link = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(resultItem.title);
    
    return (
      <div className='well wiki-card'>
        <h3>
          <a target='_blank' rel="noreferrer" href={link}>
            {resultItem.title}
          </a>
        </h3>
        <h5 dangerouslySetInnerHTML={{__html: resultItem.snippet + '...'}} />
      </div>
    );
  }
}

export default SearchResult;