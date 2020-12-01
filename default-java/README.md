# Java default project setup

After cloning this project, just go to this folder and run ``cgmerger`` and the 
``output/codingame.volatile.java`` file will be changed (modify ``codingame/main.java`` 
to test it out)

## cgmerger.conf explanations:

```
[merger]
output = output/codingame.volatile.java
workdir = codingame/
header = ../header.java
file_regex = .*.java
exclude_line_regex = ^import
comment = //
separator_start = -
separator_end = =
separator_length = 80
```

- ``output = output/codingame.volatile.java`` - the output file ``codingame.volatile.java`` 
 is located in ``output`` folder (relative to the ``default-java`` folder)
- ``workdir = codingame/`` - ``workdir`` not changed from the default setting. All of 
 the files from ``codingame/`` folder will be copied to the ``output`` file.
- ``header = ../header.java`` - the first file contents copied to the ``output`` will
 be ``codingame/../header.java`` (value relative to ``workdir``).
- ``file_regex = .*.java`` - only ``.java`` files will be added to the ``output``.
- ``exclude_line_regex = ^import`` - exclude all of lines starting with ``import``. The
 global ``import`` entries are located in the ``header.java`` file (added as ``header``)
- ``comment = //`` - comment used to indicate contents of different files will be
 ``//`` characters
- ``separator_start = -`` - the beginning of the file will be indicated with
 ``-`` character
- ``separator_end = =`` - the end of the file will be indicated with ``=`` character
- ``separator_length = 80`` - this many characters will be left-padded to start/end
 file comment.