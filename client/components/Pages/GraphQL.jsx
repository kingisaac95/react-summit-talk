import React from 'react';

export const GraphQL = () => {
  return (
    <div className="cb">
      <div className="row">
        <h1 className="searchTerm">GraphQL</h1>
        <p>Examples from graphql.org</p>

        <p>Describe your data - Type system</p>
        <pre>
          {`
            type Project {
              name: String
              tagline: String
              contributors: [User]
            }
          `}
        </pre>
        <p>Ask for what you want - Queries</p>
        <pre>
          {`
            {
              project(name: "GraphQL") {
                tagline
              }
            }
          `}
        </pre>
        <p>Get predictable results</p>
        <pre>
          {`
            {
              "project": {
                "tagline": "A query language for APIs"
              }
            }
          `}
        </pre>
      </div>
    </div>
  );
};
