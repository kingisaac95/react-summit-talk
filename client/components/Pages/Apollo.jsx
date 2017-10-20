import React from 'react';

export const Apollo = () => {
  return (
    <div className="cb">
      <div className="row">
        <h1 className="searchTerm">JSONGraphqlServer + Apollo Client</h1>

        <p>Run <code>npm install json-graphql-server react-apollo --save</code></p>

        <p>Setup the server using <code>jsonGraphqlExpress</code></p>
        <pre>
          {`
            import express from 'express';
            import { jsonGraphqlExpress } from 'json-graphql-server';

            const PORT = 3000;
            const app = express();
            const data = {
                // ... your data
            };
            app.use('/graphql', jsonGraphqlExpress(data));
            app.listen(PORT);
          `}
        </pre>

        <p>Create an instance of ApolloClient and then you will
          want to provide that client to your React component tree
          using the <code>{`<ApolloProvider/>`}</code> component.
        </p>
        <pre>
          {`
            import { ApolloProvider } from 'react-apollo';

            const client = new ApolloClient();

            ReactDOM.render(
              <ApolloProvider client={client}>
                <MyRootComponent/>
              </ApolloProvider>,
              document.getElementById('root'),
            );
          `}
        </pre>

        <p>If you have another enpoint other than /graphql, you can create a custom network interface</p>
        <pre>
          {`
            import { ApolloClient, createNetworkInterface } from 'react-apollo';

            const client = new ApolloClient({
              networkInterface: createNetworkInterface({
                uri: 'https://example.com',
              }),
            });
          `}
        </pre>

        <p>
          Connect the component to our GraphQL server using <code>graphql()</code> component enhancer.
          This function can create higher-order components that can execute queries and update reactively
          based on the data in our Apollo store.
        </p>
        <pre>
          {`
            import { gql, graphql } from 'react-apollo';

            function GalleryApp({ data: { photos } }) {
              return (
                <div>
                  <ul>
                    {photos.map(photo => (
                      <div key={photo.id}>
                        <div className="image-wrapper text-center">
                          <img src={photo.imageUrl}/>
                          <h5>{photo.title}</h5>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            export default graphql(gql\`
              query GalleryQuery {
                allPhotos {
                  id
                  album_id
                  title
                  imageUrl
                }
              }
            \`)(GalleryApp);
          `}
        </pre>
      </div>
    </div>
  );
};
