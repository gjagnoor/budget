// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// GreeterClient is the client API for Greeter service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GreeterClient interface {
	// Sends a greeting
	SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error)
	SayHelloAgain(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error)
}

type greeterClient struct {
	cc grpc.ClientConnInterface
}

func NewGreeterClient(cc grpc.ClientConnInterface) GreeterClient {
	return &greeterClient{cc}
}

func (c *greeterClient) SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error) {
	out := new(HelloReply)
	err := c.cc.Invoke(ctx, "/pb.Greeter/SayHello", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *greeterClient) SayHelloAgain(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloReply, error) {
	out := new(HelloReply)
	err := c.cc.Invoke(ctx, "/pb.Greeter/SayHelloAgain", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GreeterServer is the server API for Greeter service.
// All implementations must embed UnimplementedGreeterServer
// for forward compatibility
type GreeterServer interface {
	// Sends a greeting
	SayHello(context.Context, *HelloRequest) (*HelloReply, error)
	SayHelloAgain(context.Context, *HelloRequest) (*HelloReply, error)
	mustEmbedUnimplementedGreeterServer()
}

// UnimplementedGreeterServer must be embedded to have forward compatible implementations.
type UnimplementedGreeterServer struct {
}

func (UnimplementedGreeterServer) SayHello(context.Context, *HelloRequest) (*HelloReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SayHello not implemented")
}
func (UnimplementedGreeterServer) SayHelloAgain(context.Context, *HelloRequest) (*HelloReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SayHelloAgain not implemented")
}
func (UnimplementedGreeterServer) mustEmbedUnimplementedGreeterServer() {}

// UnsafeGreeterServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GreeterServer will
// result in compilation errors.
type UnsafeGreeterServer interface {
	mustEmbedUnimplementedGreeterServer()
}

func RegisterGreeterServer(s grpc.ServiceRegistrar, srv GreeterServer) {
	s.RegisterService(&Greeter_ServiceDesc, srv)
}

func _Greeter_SayHello_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelloRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GreeterServer).SayHello(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.Greeter/SayHello",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GreeterServer).SayHello(ctx, req.(*HelloRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Greeter_SayHelloAgain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelloRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GreeterServer).SayHelloAgain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.Greeter/SayHelloAgain",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GreeterServer).SayHelloAgain(ctx, req.(*HelloRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Greeter_ServiceDesc is the grpc.ServiceDesc for Greeter service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Greeter_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.Greeter",
	HandlerType: (*GreeterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SayHello",
			Handler:    _Greeter_SayHello_Handler,
		},
		{
			MethodName: "SayHelloAgain",
			Handler:    _Greeter_SayHelloAgain_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/connection.proto",
}

// SummaryClient is the client API for Summary service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SummaryClient interface {
	GetSummaryThisMonth(ctx context.Context, in *SummaryThisMonthRequest, opts ...grpc.CallOption) (*SummaryThisMonthResponse, error)
}

type summaryClient struct {
	cc grpc.ClientConnInterface
}

func NewSummaryClient(cc grpc.ClientConnInterface) SummaryClient {
	return &summaryClient{cc}
}

func (c *summaryClient) GetSummaryThisMonth(ctx context.Context, in *SummaryThisMonthRequest, opts ...grpc.CallOption) (*SummaryThisMonthResponse, error) {
	out := new(SummaryThisMonthResponse)
	err := c.cc.Invoke(ctx, "/pb.Summary/GetSummaryThisMonth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SummaryServer is the server API for Summary service.
// All implementations must embed UnimplementedSummaryServer
// for forward compatibility
type SummaryServer interface {
	GetSummaryThisMonth(context.Context, *SummaryThisMonthRequest) (*SummaryThisMonthResponse, error)
	mustEmbedUnimplementedSummaryServer()
}

// UnimplementedSummaryServer must be embedded to have forward compatible implementations.
type UnimplementedSummaryServer struct {
}

func (UnimplementedSummaryServer) GetSummaryThisMonth(context.Context, *SummaryThisMonthRequest) (*SummaryThisMonthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSummaryThisMonth not implemented")
}
func (UnimplementedSummaryServer) mustEmbedUnimplementedSummaryServer() {}

// UnsafeSummaryServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SummaryServer will
// result in compilation errors.
type UnsafeSummaryServer interface {
	mustEmbedUnimplementedSummaryServer()
}

func RegisterSummaryServer(s grpc.ServiceRegistrar, srv SummaryServer) {
	s.RegisterService(&Summary_ServiceDesc, srv)
}

func _Summary_GetSummaryThisMonth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SummaryThisMonthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SummaryServer).GetSummaryThisMonth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.Summary/GetSummaryThisMonth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SummaryServer).GetSummaryThisMonth(ctx, req.(*SummaryThisMonthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Summary_ServiceDesc is the grpc.ServiceDesc for Summary service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Summary_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.Summary",
	HandlerType: (*SummaryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetSummaryThisMonth",
			Handler:    _Summary_GetSummaryThisMonth_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/connection.proto",
}
