import React from 'react';

export const ComponentBased = () => {
  return (
    <div className="cb">
      <div className="row">
        <h1 className="searchTerm">Component Based</h1>
        <p>
          Build encapsulated components that manage their own state,
          then compose them to make complex UIs. - reactjs.org
        </p>

        <p>Use case: Page Footer</p>
        <pre>
          {`
            import React froda-m 'react';

            function getCurrentYear () {
              return new Date().getFullYear();
            }

            const Footer = () => {
              return (
                <div className="footer theme-background center-align">
                  <p>&copy;{getCurrentYear()}. Moodle</p>
                </div>
              );
            };

            export default Footer;
          `}
        </pre>

        <p>Rendering the Footer Component</p>
        <pre>
          {`
            import Footer from './Footer';
            
            ...

            <Footer />
          `}
        </pre>
      </div>
    </div>
  );
};
