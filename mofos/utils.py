import os


def str_to_bool(str):
    string = str.lower()
    if string == 'true':
        return True
    elif string == 'false':
        return False
    else:
        raise ValueError(f'Cannot covert {str} to a bool')


def get_file_from_prefix(path, prefix):
    files = [i for i in os.listdir(path) if os.path.isfile(os.path.join(path, i)) and prefix in i and not i.endswith('.map')]
    return files[0] if len(files) else ''
