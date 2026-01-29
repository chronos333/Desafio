from flask import Flask, render_template, request, redirect
from models import get_connection, init_db

app = Flask(__name__)
init_db()


@app.route('/')
def index():
    conn = get_connection()
    tasks = conn.execute('SELECT * FROM tasks ORDER BY id DESC').fetchall()
    conn.close()
    return render_template('index.html', tasks=tasks)


@app.route('/add', methods=('GET', 'POST'))
def add():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        priority = request.form['priority']

        conn = get_connection()
        conn.execute(
            'INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)',
            (title, description, priority)
        )
        conn.commit()
        conn.close()
        return redirect('/')

    return render_template('add_task.html')


@app.route('/done/<int:id>')
def done(id):
    conn = get_connection()
    conn.execute('UPDATE tasks SET done = 1 WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect('/')


@app.route('/delete/<int:id>')
def delete(id):
    conn = get_connection()
    conn.execute('DELETE FROM tasks WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
