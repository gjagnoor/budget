# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pb/connection.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pb/connection.proto',
  package='pb',
  syntax='proto3',
  serialized_options=b'Z\035github.com/gjagnoor/budget/pb',
  serialized_pb=b'\n\x13pb/connection.proto\x12\x02pb\"\x1c\n\x0cHelloRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\"\x1d\n\nHelloReply\x12\x0f\n\x07message\x18\x01 \x01(\t\"5\n\x06Income\x12\x0e\n\x06\x61mount\x18\x01 \x01(\x05\x12\x0c\n\x04year\x18\x02 \x01(\x05\x12\r\n\x05month\x18\x03 \x01(\x05\"6\n\x07\x45xpense\x12\x0e\n\x06\x61mount\x18\x01 \x01(\x05\x12\x0c\n\x04year\x18\x02 \x01(\x05\x12\r\n\x05month\x18\x03 \x01(\x05\"3\n\x04Goal\x12\x0e\n\x06\x61mount\x18\x01 \x01(\x05\x12\x0c\n\x04year\x18\x02 \x01(\x05\x12\r\n\x05month\x18\x03 \x01(\x05\"\xf8\x01\n\x17summaryThisYearResponse\x12\x14\n\x0ctotalIncomes\x18\x01 \x01(\x05\x12\x15\n\rtotalExpenses\x18\x02 \x01(\x05\x12\x14\n\x0ctotalSavings\x18\x03 \x01(\x05\x12\x1e\n\x16totalIncomesByNextYear\x18\x04 \x01(\x05\x12\x1f\n\x17totalExpensesByNextYear\x18\x05 \x01(\x05\x12\x1e\n\x16totalSavingsByNextYear\x18\x06 \x01(\x05\x12\x14\n\x0chealthStatus\x18\x07 \x01(\t\x12\r\n\x05\x64\x65lta\x18\x08 \x01(\t\x12\x14\n\x0cgoalAchieved\x18\t \x01(\x05\"l\n\x16summaryThisYearRequest\x12\x1b\n\x07incomes\x18\x01 \x03(\x0b\x32\n.pb.Income\x12\x1d\n\x08\x65xpenses\x18\x02 \x03(\x0b\x32\x0b.pb.Expense\x12\x16\n\x04goal\x18\x03 \x01(\x0b\x32\x08.pb.Goal\"y\n\x17summaryByMonthsResponse\x12\r\n\x05month\x18\x01 \x01(\t\x12\x14\n\x0ctotalIncomes\x18\x02 \x01(\x05\x12\x15\n\rtotalExpenses\x18\x03 \x01(\x05\x12\x14\n\x0ctotalSavings\x18\x04 \x01(\x05\x12\x0c\n\x04goal\x18\x05 \x01(\x05\"p\n\x16summaryByMonthsRequest\x12\x1b\n\x07incomes\x18\x01 \x03(\x0b\x32\n.pb.Income\x12\x1d\n\x08\x65xpenses\x18\x02 \x03(\x0b\x32\x0b.pb.Expense\x12\x1a\n\x08mainGoal\x18\x03 \x01(\x0b\x32\x08.pb.Goal2n\n\x07Greeter\x12.\n\x08SayHello\x12\x10.pb.HelloRequest\x1a\x0e.pb.HelloReply\"\x00\x12\x33\n\rSayHelloAgain\x12\x10.pb.HelloRequest\x1a\x0e.pb.HelloReply\"\x00\x32\xab\x01\n\x07Summary\x12O\n\x12GetSummaryThisYear\x12\x1a.pb.summaryThisYearRequest\x1a\x1b.pb.summaryThisYearResponse\"\x00\x12O\n\x12GetSummaryByMonths\x12\x1a.pb.summaryByMonthsRequest\x1a\x1b.pb.summaryByMonthsResponse\"\x00\x42\x1fZ\x1dgithub.com/gjagnoor/budget/pbb\x06proto3'
)




_HELLOREQUEST = _descriptor.Descriptor(
  name='HelloRequest',
  full_name='pb.HelloRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pb.HelloRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=27,
  serialized_end=55,
)


_HELLOREPLY = _descriptor.Descriptor(
  name='HelloReply',
  full_name='pb.HelloReply',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='pb.HelloReply.message', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=57,
  serialized_end=86,
)


_INCOME = _descriptor.Descriptor(
  name='Income',
  full_name='pb.Income',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='amount', full_name='pb.Income.amount', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='year', full_name='pb.Income.year', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='month', full_name='pb.Income.month', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=88,
  serialized_end=141,
)


_EXPENSE = _descriptor.Descriptor(
  name='Expense',
  full_name='pb.Expense',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='amount', full_name='pb.Expense.amount', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='year', full_name='pb.Expense.year', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='month', full_name='pb.Expense.month', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=143,
  serialized_end=197,
)


_GOAL = _descriptor.Descriptor(
  name='Goal',
  full_name='pb.Goal',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='amount', full_name='pb.Goal.amount', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='year', full_name='pb.Goal.year', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='month', full_name='pb.Goal.month', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=199,
  serialized_end=250,
)


_SUMMARYTHISYEARRESPONSE = _descriptor.Descriptor(
  name='summaryThisYearResponse',
  full_name='pb.summaryThisYearResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='totalIncomes', full_name='pb.summaryThisYearResponse.totalIncomes', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalExpenses', full_name='pb.summaryThisYearResponse.totalExpenses', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalSavings', full_name='pb.summaryThisYearResponse.totalSavings', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalIncomesByNextYear', full_name='pb.summaryThisYearResponse.totalIncomesByNextYear', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalExpensesByNextYear', full_name='pb.summaryThisYearResponse.totalExpensesByNextYear', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalSavingsByNextYear', full_name='pb.summaryThisYearResponse.totalSavingsByNextYear', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='healthStatus', full_name='pb.summaryThisYearResponse.healthStatus', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='delta', full_name='pb.summaryThisYearResponse.delta', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='goalAchieved', full_name='pb.summaryThisYearResponse.goalAchieved', index=8,
      number=9, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=253,
  serialized_end=501,
)


_SUMMARYTHISYEARREQUEST = _descriptor.Descriptor(
  name='summaryThisYearRequest',
  full_name='pb.summaryThisYearRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='incomes', full_name='pb.summaryThisYearRequest.incomes', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expenses', full_name='pb.summaryThisYearRequest.expenses', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='goal', full_name='pb.summaryThisYearRequest.goal', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=503,
  serialized_end=611,
)


_SUMMARYBYMONTHSRESPONSE = _descriptor.Descriptor(
  name='summaryByMonthsResponse',
  full_name='pb.summaryByMonthsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='month', full_name='pb.summaryByMonthsResponse.month', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalIncomes', full_name='pb.summaryByMonthsResponse.totalIncomes', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalExpenses', full_name='pb.summaryByMonthsResponse.totalExpenses', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalSavings', full_name='pb.summaryByMonthsResponse.totalSavings', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='goal', full_name='pb.summaryByMonthsResponse.goal', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=613,
  serialized_end=734,
)


_SUMMARYBYMONTHSREQUEST = _descriptor.Descriptor(
  name='summaryByMonthsRequest',
  full_name='pb.summaryByMonthsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='incomes', full_name='pb.summaryByMonthsRequest.incomes', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expenses', full_name='pb.summaryByMonthsRequest.expenses', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mainGoal', full_name='pb.summaryByMonthsRequest.mainGoal', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=736,
  serialized_end=848,
)

_SUMMARYTHISYEARREQUEST.fields_by_name['incomes'].message_type = _INCOME
_SUMMARYTHISYEARREQUEST.fields_by_name['expenses'].message_type = _EXPENSE
_SUMMARYTHISYEARREQUEST.fields_by_name['goal'].message_type = _GOAL
_SUMMARYBYMONTHSREQUEST.fields_by_name['incomes'].message_type = _INCOME
_SUMMARYBYMONTHSREQUEST.fields_by_name['expenses'].message_type = _EXPENSE
_SUMMARYBYMONTHSREQUEST.fields_by_name['mainGoal'].message_type = _GOAL
DESCRIPTOR.message_types_by_name['HelloRequest'] = _HELLOREQUEST
DESCRIPTOR.message_types_by_name['HelloReply'] = _HELLOREPLY
DESCRIPTOR.message_types_by_name['Income'] = _INCOME
DESCRIPTOR.message_types_by_name['Expense'] = _EXPENSE
DESCRIPTOR.message_types_by_name['Goal'] = _GOAL
DESCRIPTOR.message_types_by_name['summaryThisYearResponse'] = _SUMMARYTHISYEARRESPONSE
DESCRIPTOR.message_types_by_name['summaryThisYearRequest'] = _SUMMARYTHISYEARREQUEST
DESCRIPTOR.message_types_by_name['summaryByMonthsResponse'] = _SUMMARYBYMONTHSRESPONSE
DESCRIPTOR.message_types_by_name['summaryByMonthsRequest'] = _SUMMARYBYMONTHSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

HelloRequest = _reflection.GeneratedProtocolMessageType('HelloRequest', (_message.Message,), {
  'DESCRIPTOR' : _HELLOREQUEST,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.HelloRequest)
  })
_sym_db.RegisterMessage(HelloRequest)

HelloReply = _reflection.GeneratedProtocolMessageType('HelloReply', (_message.Message,), {
  'DESCRIPTOR' : _HELLOREPLY,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.HelloReply)
  })
_sym_db.RegisterMessage(HelloReply)

Income = _reflection.GeneratedProtocolMessageType('Income', (_message.Message,), {
  'DESCRIPTOR' : _INCOME,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.Income)
  })
_sym_db.RegisterMessage(Income)

Expense = _reflection.GeneratedProtocolMessageType('Expense', (_message.Message,), {
  'DESCRIPTOR' : _EXPENSE,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.Expense)
  })
_sym_db.RegisterMessage(Expense)

Goal = _reflection.GeneratedProtocolMessageType('Goal', (_message.Message,), {
  'DESCRIPTOR' : _GOAL,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.Goal)
  })
_sym_db.RegisterMessage(Goal)

summaryThisYearResponse = _reflection.GeneratedProtocolMessageType('summaryThisYearResponse', (_message.Message,), {
  'DESCRIPTOR' : _SUMMARYTHISYEARRESPONSE,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.summaryThisYearResponse)
  })
_sym_db.RegisterMessage(summaryThisYearResponse)

summaryThisYearRequest = _reflection.GeneratedProtocolMessageType('summaryThisYearRequest', (_message.Message,), {
  'DESCRIPTOR' : _SUMMARYTHISYEARREQUEST,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.summaryThisYearRequest)
  })
_sym_db.RegisterMessage(summaryThisYearRequest)

summaryByMonthsResponse = _reflection.GeneratedProtocolMessageType('summaryByMonthsResponse', (_message.Message,), {
  'DESCRIPTOR' : _SUMMARYBYMONTHSRESPONSE,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.summaryByMonthsResponse)
  })
_sym_db.RegisterMessage(summaryByMonthsResponse)

summaryByMonthsRequest = _reflection.GeneratedProtocolMessageType('summaryByMonthsRequest', (_message.Message,), {
  'DESCRIPTOR' : _SUMMARYBYMONTHSREQUEST,
  '__module__' : 'pb.connection_pb2'
  # @@protoc_insertion_point(class_scope:pb.summaryByMonthsRequest)
  })
_sym_db.RegisterMessage(summaryByMonthsRequest)


DESCRIPTOR._options = None

_GREETER = _descriptor.ServiceDescriptor(
  name='Greeter',
  full_name='pb.Greeter',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=850,
  serialized_end=960,
  methods=[
  _descriptor.MethodDescriptor(
    name='SayHello',
    full_name='pb.Greeter.SayHello',
    index=0,
    containing_service=None,
    input_type=_HELLOREQUEST,
    output_type=_HELLOREPLY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SayHelloAgain',
    full_name='pb.Greeter.SayHelloAgain',
    index=1,
    containing_service=None,
    input_type=_HELLOREQUEST,
    output_type=_HELLOREPLY,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_GREETER)

DESCRIPTOR.services_by_name['Greeter'] = _GREETER


_SUMMARY = _descriptor.ServiceDescriptor(
  name='Summary',
  full_name='pb.Summary',
  file=DESCRIPTOR,
  index=1,
  serialized_options=None,
  serialized_start=963,
  serialized_end=1134,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetSummaryThisYear',
    full_name='pb.Summary.GetSummaryThisYear',
    index=0,
    containing_service=None,
    input_type=_SUMMARYTHISYEARREQUEST,
    output_type=_SUMMARYTHISYEARRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetSummaryByMonths',
    full_name='pb.Summary.GetSummaryByMonths',
    index=1,
    containing_service=None,
    input_type=_SUMMARYBYMONTHSREQUEST,
    output_type=_SUMMARYBYMONTHSRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_SUMMARY)

DESCRIPTOR.services_by_name['Summary'] = _SUMMARY

# @@protoc_insertion_point(module_scope)
