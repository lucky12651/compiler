from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/runcode', methods=['POST'])
def run_code():
    code = request.json.get('code', '')
    input_data = request.json.get('input', None)

    try:
        output = compile_and_execute(code, input_data)
        return jsonify({'output': output})
    except Exception as e:
        return jsonify({'error': str(e)})

def compile_and_execute(code, input_data):
    temp_file_path = '/tmp/temp_code.py'

    with open(temp_file_path, 'w') as temp_file:
        temp_file.write(code)

    if input_data:
        input_file_path = '/tmp/input_data.txt'
        with open(input_file_path, 'w') as input_file:
            input_file.write(input_data)

        command = f'python3 {temp_file_path} < {input_file_path}'
    else:
        command = f'python3 {temp_file_path}'

    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error = process.communicate()

    if error:
        raise Exception(f"An error occurred: {error.decode('utf-8')}")

    return output.decode('utf-8')

@app.route('/c')
def c():
    return render_template('c.html')


@app.route('/runc', methods=['POST'])
def run_c_code():
    code = request.json.get('code', '')
    input_data = request.json.get('input', None)

    try:
        output = compile_and_execute_c(code, input_data)
        return jsonify({'output': output})
    except Exception as e:
        return jsonify({'error': str(e)})

def compile_and_execute_c(code, input_data):
    language = 'gcc'
    extension = 'c'
    compiled_file_path = '/tmp/temp_code'

    with open(f'{compiled_file_path}.{extension}', 'w') as temp_file:
        temp_file.write(code)

    command_compile = f'{language} {compiled_file_path}.{extension} -o {compiled_file_path}'
    process_compile = subprocess.Popen(command_compile, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    _, error_compile = process_compile.communicate()

    if error_compile:
        raise Exception(f"Code compilation error: {error_compile.decode('utf-8')}")

    if input_data:
        input_file_path = '/tmp/input_data.txt'
        with open(input_file_path, 'w') as input_file:
            input_file.write(input_data)

        command_execute = f'{compiled_file_path} < {input_file_path}'
    else:
        command_execute = compiled_file_path

    process_execute = subprocess.Popen(command_execute, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error_execute = process_execute.communicate()

    if error_execute:
        raise Exception(f"An error occurred during code execution: {error_execute.decode('utf-8')}")

    return output.decode('utf-8')

@app.route('/cpp')
def cpp():
    return render_template('cpp.html')


@app.route('/runcpp', methods=['POST'])
def run_cpp_code():
    code = request.json.get('code', '')
    input_data = request.json.get('input', None)

    try:
        output = compile_and_execute_cpp(code, input_data)
        return jsonify({'output': output})
    except Exception as e:
        return jsonify({'error': str(e)})
    
def compile_and_execute_cpp(code, input_data):
    language = 'g++'
    extension = 'cpp'
    compiled_file_path = '/tmp/temp_code'

    with open(f'{compiled_file_path}.{extension}', 'w') as temp_file:
        temp_file.write(code)

    command_compile = f'{language} {compiled_file_path}.{extension} -o {compiled_file_path}'
    process_compile = subprocess.Popen(command_compile, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    _, error_compile = process_compile.communicate()

    if error_compile:
        raise Exception(f"Code compilation error: {error_compile.decode('utf-8')}")

    if input_data:
        input_file_path = '/tmp/input_data.txt'
        with open(input_file_path, 'w') as input_file:
            input_file.write(input_data)

        command_execute = f'{compiled_file_path} < {input_file_path}'
    else:
        command_execute = compiled_file_path

    process_execute = subprocess.Popen(command_execute, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error_execute = process_execute.communicate()

    if error_execute:
        raise Exception(f"An error occurred during code execution: {error_execute.decode('utf-8')}")

    return output.decode('utf-8')


@app.route('/java')
def java():
    return render_template('java.html')

@app.route('/runjava', methods=['POST'])
def run_java_code():
    code = request.json.get('code', '')
    input_data = request.json.get('input', None)

    try:
        output = compile_and_execute_java(code, input_data)
        return jsonify({'output': output})
    except Exception as e:
        return jsonify({'error': str(e)})

def compile_and_execute_java(code, input_data):
    temp_file_path = '/tmp/temp_code.java'

    with open(temp_file_path, 'w') as temp_file:
        temp_file.write(code)

    compiled_file_path = '/tmp'

    command_compile = f'javac {temp_file_path} -d {compiled_file_path}'
    process_compile = subprocess.Popen(command_compile, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    _, error_compile = process_compile.communicate()

    if error_compile:
        raise Exception(f"Java code compilation error: {error_compile.decode('utf-8')}")

    class_name = code.split("class")[1].split("{")[0].strip()
    command_execute = f'java -classpath {compiled_file_path} {class_name}'

    process_execute = subprocess.Popen(command_execute, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error_execute = process_execute.communicate()

    if error_execute:
        raise Exception(f"An error occurred during Java code execution: {error_execute.decode('utf-8')}")

    return output.decode('utf-8')


@app.route('/login')
def login():
    return render_template('login.html')

# Add more routes and view functions for other HTML pages as needed

if __name__ == '__main__':
    app.run(debug=True)
