<div align="center">
  <h1>Task Management System</h1>
  <p>
    A modern full-stack task management application with a polished web interface and a Supabase backend.
    This project highlights modern web development practices, clean architecture, responsive design,
    and real-time data management.
  </p>
</div>

<hr>

<h2>Features</h2>
<ul>
  <li><strong>Complete Task Management:</strong> Create, read, update, and delete tasks efficiently.</li>
  <li><strong>Real-Time Statistics:</strong> Dashboard with task counts by status.</li>
  <li><strong>Smart Filtering:</strong> Filter tasks by status (Pending, In Progress, Completed) and priority (Low, Medium, High).</li>
  <li><strong>Priority Management:</strong> Organize tasks by Low, Medium, or High priority.</li>
  <li><strong>Due Date Tracking:</strong> Set and manage task deadlines.</li>
  <li><strong>Responsive Design:</strong> Works smoothly across desktop, tablet, and mobile devices.</li>
  <li><strong>Modern UI:</strong> Clean, professional interface with smooth animations and transitions.</li>
  <li><strong>Secure Backend:</strong> Supabase-powered database with Row Level Security.</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> Vanilla JavaScript, HTML5, CSS3</li>
  <li><strong>Build Tool:</strong> Vite</li>
  <li><strong>Database:</strong> Supabase (PostgreSQL)</li>
  <li><strong>Hosting:</strong> Compatible with static hosting platforms such as Vercel, Netlify, and GitHub Pages</li>
</ul>

<hr>


<hr>


<hr>

<h2>Prerequisites</h2>
<p>Before getting started, make sure the following are installed and available:</p>
<ul>
  <li>Node.js (v18 or higher)</li>
  <li>npm or yarn</li>
  <li>A Supabase account</li>
</ul>

<hr>

<h2>Getting Started</h2>

<h3>1. Clone the Repository</h3>
<pre><code class="language-bash">git clone https://github.com/your-username/task-management-system.git
cd task-management-system</code></pre>

<h3>2. Install Dependencies</h3>
<pre><code class="language-bash">npm install</code></pre>

<h3>3. Set Up Supabase</h3>
<ol>
  <li>Create a new Supabase project.</li>
  <li>Apply the database schema using the project migrations.</li>
  <li>Open the project API settings and copy the required credentials.</li>
</ol>

<h3>4. Configure Environment Variables</h3>
<p>Create a <code>.env</code> file in the root directory and add the required environment variables:</p>
<pre><code class="language-env">VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key</code></pre>

<h3>5. Run the Application</h3>
<pre><code class="language-bash">npm run dev</code></pre>

<p>The application runs locally at <code>http://localhost:3000</code>.</p>

<hr>

<h2>Database Schema</h2>
<p>The application uses a <code>tasks</code> table with the following structure:</p>

<table>
  <thead>
    <tr>
      <th>Column</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>uuid</code></td>
      <td>Primary key (auto-generated)</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>text</code></td>
      <td>Task title (required)</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td><code>text</code></td>
      <td>Task description (optional)</td>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td><code>text</code></td>
      <td>Pending, InProgress, or Completed</td>
    </tr>
    <tr>
      <td><code>priority</code></td>
      <td><code>text</code></td>
      <td>Low, Medium, or High</td>
    </tr>
    <tr>
      <td><code>due_date</code></td>
      <td><code>timestamptz</code></td>
      <td>Optional due date</td>
    </tr>
    <tr>
      <td><code>created_at</code></td>
      <td><code>timestamptz</code></td>
      <td>Creation timestamp</td>
    </tr>
    <tr>
      <td><code>updated_at</code></td>
      <td><code>timestamptz</code></td>
      <td>Last update timestamp</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Project Structure</h2>
<pre><code>task-management-system/
├── src/
│   ├── main.js
│   ├── api.js
│   ├── supabase.js
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── .env</code></pre>

<hr>

<h2>Available Scripts</h2>
<ul>
  <li><code>npm run dev</code> - Start the development server</li>
  <li><code>npm run build</code> - Build the project for production</li>
  <li><code>npm run preview</code> - Preview the production build locally</li>
</ul>

<hr>

<h2>Deployment</h2>

<h3>Build for Production</h3>
<pre><code class="language-bash">npm run build</code></pre>

<p>The production build is generated in the <code>dist/</code> directory.</p>

<h3>Deploy to Vercel</h3>
<ol>
  <li>Push the project to GitHub.</li>
  <li>Import the repository into Vercel.</li>
  <li>Add the required environment variables in the project settings.</li>
  <li>Deploy the project.</li>
</ol>

<h3>Deploy to Netlify</h3>
<ol>
  <li>Push the project to GitHub.</li>
  <li>Connect the repository in Netlify.</li>
  <li>Set the build command to <code>npm run build</code>.</li>
  <li>Set the publish directory to <code>dist</code>.</li>
  <li>Add the required environment variables.</li>
  <li>Deploy the project.</li>
</ol>

<hr>

<h2>Features in Detail</h2>

<h3>Task Management</h3>
<ul>
  <li>Create tasks with a title, description, status, priority, and due date.</li>
  <li>Edit existing tasks directly from the interface.</li>
  <li>Delete tasks with a confirmation prompt.</li>
  <li>See changes reflected immediately in the database.</li>
</ul>

<h3>Filtering System</h3>
<ul>
  <li>Filter by status to view Pending, In Progress, or Completed tasks.</li>
  <li>Filter by priority to focus on High, Medium, or Low priority items.</li>
  <li>Combine filters for more precise task views.</li>
  <li>Updates are reflected in real time.</li>
</ul>

<h3>Statistics Dashboard</h3>
<ul>
  <li>Live count of total tasks.</li>
  <li>Status breakdown for Pending, In Progress, and Completed tasks.</li>
  <li>Automatic updates whenever tasks change.</li>
</ul>

<h3>User Experience</h3>
<ul>
  <li>Smooth animations and transitions.</li>
  <li>Hover effects that improve interactivity.</li>
  <li>Loading states for asynchronous operations.</li>
  <li>Clear and helpful error messages.</li>
  <li>Responsive layout across all screen sizes.</li>
</ul>

<hr>

<h2>Security</h2>
<p>
  The application uses Supabase Row Level Security (RLS). The current configuration is suitable for demonstration purposes.
  For a production deployment, it is recommended to enable authentication, update RLS policies to restrict access to authenticated users,
  associate tasks with user ownership, and enforce proper authorization checks.
</p>

<hr>

<h2>Browser Support</h2>
<ul>
  <li>Chrome (latest)</li>
  <li>Firefox (latest)</li>
  <li>Safari (latest)</li>
  <li>Edge (latest)</li>
</ul>

<hr>

<h2>Contributing</h2>
<p>Contributions are welcome through pull requests.</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a feature branch.</li>
  <li>Commit your changes.</li>
  <li>Push the branch to your fork.</li>
  <li>Open a pull request.</li>
</ol>

<hr>

<h2>Future Enhancements</h2>
<ul>
  <li>User authentication and multi-user support</li>
  <li>Task assignments and collaboration</li>
  <li>Task categories and tags</li>
  <li>Search functionality</li>
  <li>Due date notifications and reminders</li>
  <li>Dark mode toggle</li>
  <li>Export tasks to CSV or PDF</li>
  <li>Drag-and-drop task reordering</li>
  <li>Task archiving</li>
  <li>Recurring tasks</li>
</ul>

<hr>

<h2>License</h2>
<p>
  This project is licensed under the MIT License. See the LICENSE file for more information.
</p>

<hr>

<h2>Acknowledgments</h2>
<ul>
  <li>Built with Vite for a fast and modern development workflow</li>
  <li>Database powered by Supabase</li>
  <li>Designed with inspiration from modern task management applications</li>
</ul>

<hr>

<h2>Support</h2>
<p>If any issues come up or if more information is needed:</p>
<ul>
  <li>Open an issue on GitHub</li>
  <li>Review existing issues for possible solutions</li>
  <li>Check the project documentation</li>
</ul>
