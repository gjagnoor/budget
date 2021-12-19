// adding to PATH means adding it to zshrc profile for me. That will save the configuration and remember it. Won't have to run the command again each time a new terminal is opened.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: pb/connection.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The request message containing the user's name.
type HelloRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *HelloRequest) Reset() {
	*x = HelloRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HelloRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HelloRequest) ProtoMessage() {}

func (x *HelloRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HelloRequest.ProtoReflect.Descriptor instead.
func (*HelloRequest) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{0}
}

func (x *HelloRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// The response message containing the greetings
type HelloReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *HelloReply) Reset() {
	*x = HelloReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HelloReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HelloReply) ProtoMessage() {}

func (x *HelloReply) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HelloReply.ProtoReflect.Descriptor instead.
func (*HelloReply) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{1}
}

func (x *HelloReply) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type Income struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Amount int32 `protobuf:"varint,1,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (x *Income) Reset() {
	*x = Income{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Income) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Income) ProtoMessage() {}

func (x *Income) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Income.ProtoReflect.Descriptor instead.
func (*Income) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{2}
}

func (x *Income) GetAmount() int32 {
	if x != nil {
		return x.Amount
	}
	return 0
}

type Expense struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Amount int32 `protobuf:"varint,1,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (x *Expense) Reset() {
	*x = Expense{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Expense) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Expense) ProtoMessage() {}

func (x *Expense) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Expense.ProtoReflect.Descriptor instead.
func (*Expense) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{3}
}

func (x *Expense) GetAmount() int32 {
	if x != nil {
		return x.Amount
	}
	return 0
}

type SummaryThisYearResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TotalIncomes  int32 `protobuf:"varint,1,opt,name=totalIncomes,proto3" json:"totalIncomes,omitempty"`
	TotalExpenses int32 `protobuf:"varint,2,opt,name=totalExpenses,proto3" json:"totalExpenses,omitempty"`
	TotalSavings  int32 `protobuf:"varint,3,opt,name=totalSavings,proto3" json:"totalSavings,omitempty"`
}

func (x *SummaryThisYearResponse) Reset() {
	*x = SummaryThisYearResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SummaryThisYearResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SummaryThisYearResponse) ProtoMessage() {}

func (x *SummaryThisYearResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SummaryThisYearResponse.ProtoReflect.Descriptor instead.
func (*SummaryThisYearResponse) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{4}
}

func (x *SummaryThisYearResponse) GetTotalIncomes() int32 {
	if x != nil {
		return x.TotalIncomes
	}
	return 0
}

func (x *SummaryThisYearResponse) GetTotalExpenses() int32 {
	if x != nil {
		return x.TotalExpenses
	}
	return 0
}

func (x *SummaryThisYearResponse) GetTotalSavings() int32 {
	if x != nil {
		return x.TotalSavings
	}
	return 0
}

type SummaryThisYearRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Incomes  []*Income  `protobuf:"bytes,1,rep,name=incomes,proto3" json:"incomes,omitempty"`
	Expenses []*Expense `protobuf:"bytes,2,rep,name=expenses,proto3" json:"expenses,omitempty"`
}

func (x *SummaryThisYearRequest) Reset() {
	*x = SummaryThisYearRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_connection_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SummaryThisYearRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SummaryThisYearRequest) ProtoMessage() {}

func (x *SummaryThisYearRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pb_connection_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SummaryThisYearRequest.ProtoReflect.Descriptor instead.
func (*SummaryThisYearRequest) Descriptor() ([]byte, []int) {
	return file_pb_connection_proto_rawDescGZIP(), []int{5}
}

func (x *SummaryThisYearRequest) GetIncomes() []*Income {
	if x != nil {
		return x.Incomes
	}
	return nil
}

func (x *SummaryThisYearRequest) GetExpenses() []*Expense {
	if x != nil {
		return x.Expenses
	}
	return nil
}

var File_pb_connection_proto protoreflect.FileDescriptor

var file_pb_connection_proto_rawDesc = []byte{
	0x0a, 0x13, 0x70, 0x62, 0x2f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x70, 0x62, 0x22, 0x22, 0x0a, 0x0c, 0x48, 0x65, 0x6c,
	0x6c, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x26, 0x0a,
	0x0a, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x18, 0x0a, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x20, 0x0a, 0x06, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x21, 0x0a, 0x07, 0x45, 0x78, 0x70, 0x65, 0x6e,
	0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x87, 0x01, 0x0a, 0x17, 0x73,
	0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x54, 0x68, 0x69, 0x73, 0x59, 0x65, 0x61, 0x72, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x22, 0x0a, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x49,
	0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x73, 0x12, 0x24, 0x0a, 0x0d, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x45, 0x78, 0x70, 0x65, 0x6e, 0x73, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0d, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x45, 0x78, 0x70, 0x65, 0x6e, 0x73, 0x65, 0x73,
	0x12, 0x22, 0x0a, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x53, 0x61, 0x76, 0x69, 0x6e, 0x67, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x53, 0x61, 0x76,
	0x69, 0x6e, 0x67, 0x73, 0x22, 0x67, 0x0a, 0x16, 0x73, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x54,
	0x68, 0x69, 0x73, 0x59, 0x65, 0x61, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24,
	0x0a, 0x07, 0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x0a, 0x2e, 0x70, 0x62, 0x2e, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x52, 0x07, 0x69, 0x6e, 0x63,
	0x6f, 0x6d, 0x65, 0x73, 0x12, 0x27, 0x0a, 0x08, 0x65, 0x78, 0x70, 0x65, 0x6e, 0x73, 0x65, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x70, 0x62, 0x2e, 0x45, 0x78, 0x70, 0x65,
	0x6e, 0x73, 0x65, 0x52, 0x08, 0x65, 0x78, 0x70, 0x65, 0x6e, 0x73, 0x65, 0x73, 0x32, 0x6e, 0x0a,
	0x07, 0x47, 0x72, 0x65, 0x65, 0x74, 0x65, 0x72, 0x12, 0x2e, 0x0a, 0x08, 0x53, 0x61, 0x79, 0x48,
	0x65, 0x6c, 0x6c, 0x6f, 0x12, 0x10, 0x2e, 0x70, 0x62, 0x2e, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0e, 0x2e, 0x70, 0x62, 0x2e, 0x48, 0x65, 0x6c, 0x6c,
	0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x33, 0x0a, 0x0d, 0x53, 0x61, 0x79, 0x48,
	0x65, 0x6c, 0x6c, 0x6f, 0x41, 0x67, 0x61, 0x69, 0x6e, 0x12, 0x10, 0x2e, 0x70, 0x62, 0x2e, 0x48,
	0x65, 0x6c, 0x6c, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0e, 0x2e, 0x70, 0x62,
	0x2e, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x32, 0x5a, 0x0a,
	0x07, 0x53, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x12, 0x4f, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x53,
	0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x54, 0x68, 0x69, 0x73, 0x59, 0x65, 0x61, 0x72, 0x12, 0x1a,
	0x2e, 0x70, 0x62, 0x2e, 0x73, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x54, 0x68, 0x69, 0x73, 0x59,
	0x65, 0x61, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x70, 0x62, 0x2e,
	0x73, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x54, 0x68, 0x69, 0x73, 0x59, 0x65, 0x61, 0x72, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x1f, 0x5a, 0x1d, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x6a, 0x61, 0x67, 0x6e, 0x6f, 0x6f, 0x72,
	0x2f, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_pb_connection_proto_rawDescOnce sync.Once
	file_pb_connection_proto_rawDescData = file_pb_connection_proto_rawDesc
)

func file_pb_connection_proto_rawDescGZIP() []byte {
	file_pb_connection_proto_rawDescOnce.Do(func() {
		file_pb_connection_proto_rawDescData = protoimpl.X.CompressGZIP(file_pb_connection_proto_rawDescData)
	})
	return file_pb_connection_proto_rawDescData
}

var file_pb_connection_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_pb_connection_proto_goTypes = []interface{}{
	(*HelloRequest)(nil),            // 0: pb.HelloRequest
	(*HelloReply)(nil),              // 1: pb.HelloReply
	(*Income)(nil),                  // 2: pb.Income
	(*Expense)(nil),                 // 3: pb.Expense
	(*SummaryThisYearResponse)(nil), // 4: pb.summaryThisYearResponse
	(*SummaryThisYearRequest)(nil),  // 5: pb.summaryThisYearRequest
}
var file_pb_connection_proto_depIdxs = []int32{
	2, // 0: pb.summaryThisYearRequest.incomes:type_name -> pb.Income
	3, // 1: pb.summaryThisYearRequest.expenses:type_name -> pb.Expense
	0, // 2: pb.Greeter.SayHello:input_type -> pb.HelloRequest
	0, // 3: pb.Greeter.SayHelloAgain:input_type -> pb.HelloRequest
	5, // 4: pb.Summary.GetSummaryThisYear:input_type -> pb.summaryThisYearRequest
	1, // 5: pb.Greeter.SayHello:output_type -> pb.HelloReply
	1, // 6: pb.Greeter.SayHelloAgain:output_type -> pb.HelloReply
	4, // 7: pb.Summary.GetSummaryThisYear:output_type -> pb.summaryThisYearResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pb_connection_proto_init() }
func file_pb_connection_proto_init() {
	if File_pb_connection_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pb_connection_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HelloRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_connection_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HelloReply); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_connection_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Income); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_connection_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Expense); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_connection_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SummaryThisYearResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_connection_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SummaryThisYearRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pb_connection_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_pb_connection_proto_goTypes,
		DependencyIndexes: file_pb_connection_proto_depIdxs,
		MessageInfos:      file_pb_connection_proto_msgTypes,
	}.Build()
	File_pb_connection_proto = out.File
	file_pb_connection_proto_rawDesc = nil
	file_pb_connection_proto_goTypes = nil
	file_pb_connection_proto_depIdxs = nil
}
