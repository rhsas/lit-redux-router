import { LitElement, html, css, CSSResult, TemplateResult } from 'lit-element';

class ContentTable extends LitElement {
  public static get styles(): CSSResult {
    return css`
      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin: 16px 0;
      }

      ul ul {
        margin-left: 16px;
      }

      ul ul li {
        margin: 4px 0;
      }
    `;
  }

  public render(): TemplateResult {
    return html`
      <nav>
        <ul>
          <li><a href="/getting-started">Getting Started</a></li>
          <li>
            <a href="/render-content-for-a-route">Render content for a route</a>
            <ul>
              <li>
                <a href="/render-content-for-a-route#with-children-elements">
                  with children elements
                </a>
              </li>
              <li>
                <a href="/render-content-for-a-route#with-a-component">with a component</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/matching-cases-for-route-paths">Matching cases for paths</a>
            <ul>
              <li><a href="/matching-cases-for-route-paths#text-path">plain text</a></li>
              <li>
                <a href="/matching-cases-for-route-paths#path-with-variables">with variables</a>
              </li>
            </ul>
          </li>
          <li><a href="/not-found-404">Not found path (404)</a></li>
          <li>
            <a href="/trigger-a-route">Trigger a route</a>
            <ul>
              <li><a href="/trigger-a-route#with-links">with links</a></li>
              <li><a href="/trigger-a-route#with-a-redux-action">with a redux action</a></li>
            </ul>
          </li>
          <li><a href="">Nesting routes</a></li>
          <li>
            <a href="/scroll">Scroll</a>
            <ul>
              <li><a href="#">Scroll into view</a></li>
              <li><a href="#">Smooth scrolling</a></li>
              <li><a href="#">Disable default scroll to top</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-content-table', ContentTable);