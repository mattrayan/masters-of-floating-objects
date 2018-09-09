def str_to_bool(str):
    string = str.lower()
    if string == 'true':
        return True
    elif string == 'false':
        return False
    else:
        raise ValueError(f'Cannot covert {str} to a bool')
