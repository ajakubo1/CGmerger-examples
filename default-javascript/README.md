# JavaScript default project setup

After cloning this project, just go to this folder and run ``cgmerger`` and the 
``output/codingame.volatile.js`` file will be changed (modify ``codingame/main.js`` 
to test it out)

## cgmerger.conf explanations:

```
[merger]
output = output/codingame.volatile.js
workdir = codingame/
header = ../header.js
footer = main.js
file_regex = .*.js
exclude_line_regex = ^import
remove_parts_regex = ^export
comment = //
separator_start = -
separator_end = =
separator_length = 80

```

- ``output = output/codingame.volatile.js`` - the output file ``codingame.volatile.js`` 
 is located in ``output`` folder (relative to the ``default-javacript`` folder)
- ``workdir = codingame/`` - ``workdir`` not changed from the default setting. All of 
 the files from ``codingame/`` folder will be copied to the ``output`` file.
- ``header = ../header.js`` - the first file contents copied to the ``output`` will be 
``codingame/../header.js`` (value relative to ``workdir``).
- ``file_regex = .*.js`` - only ``.js`` files will be added to the ``output``.
- ``exclude_line_regex = ^import`` - exclude all of lines starting with ``import``.
- ``remove_parts_regex = ^export`` - remove from all of lines every mention of
``^export`` string. The rest of the line is preserved, only ``export`` will be
 removed from the line.
- ``comment = //`` - comment used to indicate contents of different files will be
 ``//`` characters
- ``separator_start = -`` - the beginning of the file will be indicated with
 ``-`` character
- ``separator_end = =`` - the end of the file will be indicated with ``=`` character
- ``separator_length = 80`` - this many characters will be left-padded to start/end
 file comment.